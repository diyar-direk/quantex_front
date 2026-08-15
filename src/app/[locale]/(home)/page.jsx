import Button from "@/components/buttons/Button";
import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/home.css";
import HomeAbout from "./(home)/HomeAbout";
import Landing from "./(home)/Landing";
import HomeServices from "./(home)/HomeServices";
import HomeProjects from "./(home)/HomeProjects";
import HomeBlogs from "./(home)/HomeBlogs";
import HomeAnnouncement from "./(home)/HomeAnnouncements";
import Homeproducts from "./(home)/HomeProduct";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      <Landing />

      <HomeAbout />

      <Homeproducts />

      <HomeServices />

      <HomeProjects />

      <main className="container main-section">
        <section className="home-contact">
          <h1>Ready to Transform Your Digital Future?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolores eveniet nemo nesciunt perferendis. Quae rem porro impedit
            dignissimos enim consequuntur
          </p>
          <div className="btns center gap-10">
            <Button>start a project</Button>
            <Button btnStyleType="transparent">join us</Button>
          </div>
        </section>
      </main>

      <HomeBlogs />

      <HomeAnnouncement />
    </>
  );
}
