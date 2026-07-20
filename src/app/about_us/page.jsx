import MainTitle from "@/components/main_title/MainTitle";
import {
  faExclamationCircle,
  faEye,
  faQuestionCircle,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/home.css";
import "./style.css";
import AboutImg from "@/assets/about.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <main className="container main-section body-color about-page">
        <section>
          <h2>who are we</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            soluta inventore esse quas nobis suscipit cum vitae impedit vero
            iure. Fugit aut nulla consectetur quidem eaque labore doloribus
            tempore maiores?
          </p>
          <h2>why quantex</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            soluta inventore esse quas nobis suscipit cum vitae impedit vero
            iure. Fugit aut nulla consectetur quidem eaque labore doloribus
            tempore maiores?
          </p>
        </section>
        <section>
          <Image src={AboutImg} alt="ServicesImg" />
        </section>
      </main>

      <main className="container main-section section-color">
        <MainTitle>about us</MainTitle>
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
      </main>
    </>
  );
};

export default AboutUs;
