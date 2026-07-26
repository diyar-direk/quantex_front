import MainTitle from "@/components/main_title/MainTitle";
import {
  faExclamationCircle,
  faEye,
  faQuestionCircle,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import AboutImg from "@/assets/about.svg";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AboutUsCards from "@/components/about_us_cards/AboutUsCards";

export const metadata = {
  title: "About us",
  description: "meta description",
  keywords: ["te", "tes", "test"],
};

const AboutUs = () => {
  return (
    <>
      <Breadcrumbs />
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
      </main>
    </>
  );
};

export default AboutUs;
