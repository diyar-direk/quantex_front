import React from "react";
import ViewProducts from "./ViewProducts";
import { stripHtml } from "@/utils/stripHtml";
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
        "اكتشف منتجات كوانتكس الرقمية والبرمجية المصممة لتقديم حلول عملية وذكية.",

      keywords: [
        "كوانتكس",
        "منتجات كوانتكس",
        "منتجات رقمية",
        "منتجات برمجية",
        "حلول تقنية",
        "حلول رقمية",
        data?.category,
      ].filter(Boolean),

      openGraph: {
        type: "website",
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
      title: "المنتجات | كوانتكس",
      description:
        "اكتشف منتجات كوانتكس الرقمية والبرمجية والحلول التقنية التي نقدمها.",
    };
  }
}

const Page = () => {
  return <ViewProducts />;
};

export default Page;
