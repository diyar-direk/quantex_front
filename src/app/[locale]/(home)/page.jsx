import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/home.css";
import HomeAbout from "./(home)/HomeAbout";
import Landing from "./(home)/Landing";
import HomeServices from "./(home)/HomeServices";
import HomeProjects from "./(home)/HomeProjects";
import HomeBlogs from "./(home)/HomeBlogs";
import HomeAnnouncement from "./(home)/HomeAnnouncements";
import Homeproducts from "./(home)/HomeProduct";
import HomeContact from "./(home)/HomeContact";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      <Landing />

      <HomeAbout />

      <Homeproducts />

      <HomeServices />

      <HomeProjects />

      <HomeContact />

      <HomeBlogs />

      <HomeAnnouncement />
    </>
  );
}
