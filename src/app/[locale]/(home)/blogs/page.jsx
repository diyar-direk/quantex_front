import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BlogsComp from "./BlogsComp";

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
