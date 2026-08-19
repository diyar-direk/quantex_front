import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AnnouncementComp from "./AnnouncementComp";

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
