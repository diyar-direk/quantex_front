import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ProjectsComp from "./ProjectsComp";

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
