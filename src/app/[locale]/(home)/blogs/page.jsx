import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BlogsComp from "./BlogsComp";

export const metadata = {
  title: "Blogs",
  description:
    "استكشف مدونة كوانتكس وتعرّف على أحدث المقالات والأفكار والرؤى في عالم البرمجيات والتكنولوجيا والحلول الرقمية.",
  keywords: [
    "مدونة كوانتكس",
    "مقالات تقنية",
    "البرمجيات",
    "التكنولوجيا",
    "الحلول الرقمية",
    "تطوير البرمجيات",
  ],
};

const Blogs = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <BlogsComp />
      </main>
    </>
  );
};

export default Blogs;
