"use client";
import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import ParticlesBackground from "@/components/ParticlesBackground";
import { colors } from "@/constants/colors";
import "@/styles/home.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faExclamationCircle,
  faEye,
  faQuestionCircle,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="home-landing container main-section">
        <div className="landing-container">
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
          <div className="about-card">
            <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
            <h2>who are we</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              sit itaque? Dolore maiores voluptatum
            </p>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
            <h2>why choose us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              sit itaque? Dolore maiores voluptatum
            </p>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faRocket} className="icon" />
            <h2>our mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quibusdam, culpa repudiandae cum repellendus
            </p>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faEye} className="icon" />
            <h2>our vission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              architecto illum dolor a quasi aspernatur, dicta aliquam, itaque
              esse explicabo ipsam hic voluptatum rem molestiae!
            </p>
          </div>
        </div>
        <div className="center gap-10" style={{ marginTop: "15px" }}>
          <Button>viwe services</Button>
          <Button btnStyleType="outlined">contact us</Button>
        </div>
      </main>

      <main className="container main-section">
        <MainTitle subTitle={"Lorem ipsum dolor sit"}>our services</MainTitle>
        <div className="services-container grid-3">
          <div className="service-card">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h2>Lorem ipsum dolor </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corrupti.
            </p>
            <div className="btns">
              <span>
                <FontAwesomeIcon icon={faReact} /> react
              </span>
              <span>react</span>
              <span>react</span>
              <span>react</span>
            </div>
          </div>
          <div className="service-card" style={{ "--main-color": colors.move }}>
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h2>Lorem ipsum dolor </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corrupti.
            </p>
            <div className="btns">
              <span>react</span>
              <span>react</span>
              <span>react</span>
              <span>react</span>
            </div>
          </div>
          <div className="service-card" style={{ "--main-color": colors.red }}>
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h2>Lorem ipsum dolor </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corrupti.
            </p>
            <div className="btns">
              <span>react</span>
              <span>react</span>
              <span>react</span>
              <span>react</span>
            </div>
          </div>
          <div
            className="service-card"
            style={{ "--main-color": colors.green }}
          >
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h2>Lorem ipsum dolor </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corrupti.
            </p>
            <div className="btns">
              <span>react</span>
              <span>react</span>
              <span>react</span>
              <span>react</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
