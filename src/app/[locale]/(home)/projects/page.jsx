import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ProjectsComp from "./ProjectsComp";

export const metadata = {
  title: "Projects",
  description:
    "تعرّف على أبرز مشاريع كوانتكس واستكشف الحلول البرمجية والتقنية التي طوّرناها لتلبية احتياجات الأعمال وتحويل الأفكار إلى منتجات رقمية.",
  keywords: [
    "مشاريع كوانتكس",
    "أعمال كوانتكس",
    "مشاريع برمجية",
    "حلول تقنية",
    "تطوير البرمجيات",
    "مشاريع رقمية",
  ],
};

const Projects = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <ProjectsComp />
      </main>
    </>
  );
};

export default Projects;
