import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AnnouncementComp from "./AnnouncementComp";

export const metadata = {
  title: "Announcements",
  description:
    "تابع أحدث إعلانات كوانتكس وتعرّف على آخر الأخبار والتحديثات والمستجدات المتعلقة بالشركة وخدماتها ومنتجاتها.",
  keywords: [
    "إعلانات كوانتكس",
    "أخبار كوانتكس",
    "تحديثات كوانتكس",
    "مستجدات الشركة",
    "أخبار تقنية",
    "إعلانات الشركة",
  ],
};

const Announcements = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <AnnouncementComp />
      </main>
    </>
  );
};

export default Announcements;
