import ViewBlogs from "./ViewBlogs";
import APIClient from "@/utils/ApiClient";
import { endPoints } from "@/constants/endPoints";
import { stripHtml } from "@/utils/stripHtml";

const api = new APIClient(endPoints.posts.all);

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await api.getOne(id);

    const content = stripHtml(data?.content || "").slice(0, 160);

    return {
      title: `${data?.title}`,

      description:
        content || "اقرأ أحدث المقالات والأفكار والرؤى التقنية من كوانتكس.",

      keywords: [
        "كوانتكس",
        "مدونة كوانتكس",
        "مقالات تقنية",
        data?.category,
      ].filter(Boolean),

      openGraph: {
        type: "article",
        title: data?.title,
        description: content,

        images: data?.image
          ? [
              {
                url: data.image,
                alt: data.title,
              },
            ]
          : ["/logo.jpeg"],
      },

      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: content,

        images: data?.image ? [data.image] : ["/logo.jpeg"],
      },
    };
  } catch {
    return {
      title: "المدونة | كوانتكس",
      description:
        "استكشف أحدث المقالات والأفكار والرؤى في عالم البرمجيات والتكنولوجيا من كوانتكس.",
    };
  }
}

export default function Page() {
  return <ViewBlogs />;
}
