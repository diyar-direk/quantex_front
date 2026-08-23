import { stripHtml } from "@/utils/stripHtml";
import ViewAnnouncement from "./ViewAnnouncement";
import APIClient from "@/utils/ApiClient";
import { endPoints } from "@/constants/endPoints";

const api = new APIClient(endPoints.posts.all);

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await api.getOne(id);

    const content = stripHtml(data?.content || "").slice(0, 160);

    return {
      title: `${data?.title}`,

      description:
        content ||
        "تابع أحدث إعلانات كوانتكس وأخبار الشركة والتحديثات والمستجدات.",

      keywords: [
        "كوانتكس",
        "إعلانات كوانتكس",
        "أخبار كوانتكس",
        "تحديثات كوانتكس",
        "مستجدات الشركة",
        "أخبار تقنية",
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
      title: "الإعلانات | كوانتكس",
      description:
        "تابع أحدث إعلانات كوانتكس وأخبار الشركة والتحديثات والمستجدات.",
    };
  }
}

const Page = () => {
  return <ViewAnnouncement />;
};

export default Page;
