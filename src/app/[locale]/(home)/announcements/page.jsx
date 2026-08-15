import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AnnouncementComp from "./AnnouncementComp";
import MainTitle from "@/components/main_title/MainTitle";

const Announcements = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <MainTitle>our Announcements</MainTitle>
        <AnnouncementComp />
      </main>
    </>
  );
};

export default Announcements;
