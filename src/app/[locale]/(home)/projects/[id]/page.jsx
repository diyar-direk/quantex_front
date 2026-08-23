import APIClient from "@/utils/ApiClient";
import { endPoints } from "@/constants/endPoints";
import ViewProject from "./ViewProject";
import { stripHtml } from "@/utils/stripHtml";

const api = new APIClient(endPoints.posts.all);

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await api.getOne(id);

    const content = stripHtml(data?.content || "").slice(0, 160);

    return {
      title: data?.title,

      description:
        content ||
        "تعرّف على مشاريع كوانتكس والحلول البرمجية والتقنية التي طوّرناها.",

      keywords: [
        "كوانتكس",
        "مشاريع كوانتكس",
        "مشاريع برمجية",
        "حلول تقنية",
        "تطوير البرمجيات",
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
      description:
        "تعرّف على أبرز مشاريع كوانتكس والحلول البرمجية والتقنية التي طوّرناها.",
    };
  }
}

export default function Page() {
  return <ViewProject />;
}
