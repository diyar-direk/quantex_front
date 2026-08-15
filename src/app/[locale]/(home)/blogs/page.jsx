import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import BlogsComp from "./BlogsComp";
import MainTitle from "@/components/main_title/MainTitle";

const Blogs = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <MainTitle>our Blogs</MainTitle>
        <BlogsComp />
      </main>
    </>
  );
};

export default Blogs;
