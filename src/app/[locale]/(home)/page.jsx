"use client";
import AboutUsCards from "@/components/about_us_cards/AboutUsCards";
import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import ParticlesBackground from "@/components/ParticlesBackground";
import ServiceCard from "@/components/services/ServiceCard";
import { colors } from "@/constants/colors";
import "@/styles/home.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCloud,
  faCode,
  faExclamationCircle,
  faEye,
  faMobile,
  faNetworkWired,
  faQuestionCircle,
  faRobot,
  faRocket,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="home-landing">
        <section className="company-info container">
          <div className="service">
            <FontAwesomeIcon icon={faServer} />
            <h2>Software Development</h2>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faShieldHalved} />
            <h2>Software Development</h2>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faBrain} />
            <h2>Software Development</h2>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faCode} />
            <h2>Software Development</h2>
          </div>
        </section>
        <div className="landing-container container main-section">
          <h1>
            welcome to <span>quantex</span> company
          </h1>
          <TypeAnimation
            sequence={[
              "Diyar",
              2000,
              "Test",
              2000,
              "Next.js Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
            cursor={true}
            className="typing-text"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolor repellat corporis, temporibus pariatur eaque soluta ratione
            reprehenderit fugiat quae. At culpa unde repellendus minima nemo
            ducimus ullam praesentium repellat?
          </p>
          <div className="btns">
            <Button>explorer our services</Button>
            <Button btnStyleType="outlined">start now</Button>
          </div>
        </div>
      </main>

      <main className="container main-section section-color">
        <MainTitle subTitle={"Lorem ipsum dolor sit"}>about us</MainTitle>
        <div className="about-card-container">
          <AboutUsCards
            title="who are we"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing"
            icon={faExclamationCircle}
          />
          <AboutUsCards
            title="why choose us"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing"
            icon={faQuestionCircle}
          />
          <AboutUsCards
            title="our vission"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing"
            icon={faEye}
          />
          <AboutUsCards
            title="our mission"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing"
            icon={faRocket}
          />
        </div>
        <div className="center gap-10" style={{ marginTop: "15px" }}>
          <Button>viwe services</Button>
          <Button btnStyleType="outlined">contact us</Button>
        </div>
      </main>

      <main className="container main-section">
        <MainTitle subTitle={"Lorem ipsum dolor sit"}>our services</MainTitle>
        <div className="services-container grid-3">
          <ServiceCard
            icon={faCode}
            title="Software Development"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,"
            tags={[{ text: "react", icon: faReact }, { text: "test" }]}
          />
          <ServiceCard
            icon={faShieldHalved}
            title="Cybersecurity & Pentesting"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.green}
          />
          <ServiceCard
            icon={faMobile}
            title="Web & Mobile Apps"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.move}
          />
          <ServiceCard
            icon={faNetworkWired}
            title="Network Engineering"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.orange}
          />
          <ServiceCard
            icon={faServer}
            title="server management"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.blue}
          />
          <ServiceCard
            icon={faBrain}
            title="AI Development"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.red}
          />
          <ServiceCard
            icon={faRobot}
            title="AI Agents & Automation"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,"
            tags={[{ text: "react", icon: faReact }, { text: "test" }]}
          />
          <ServiceCard
            icon={faCloud}
            title="SaaS & Cloud Products"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.green}
          />
        </div>
        <div className="center" style={{ marginTop: "10px" }}>
          <Button> explorer all services </Button>
        </div>
      </main>

      <main className="main-section container section-color"></main>

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
    </>
  );
}
