import {
  faEye,
  faQuestionCircle,
  faRocket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import AboutImg from "@/assets/about.svg";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AboutUsCards from "@/components/about_us_cards/AboutUsCards";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About us",
  description: "meta description",
  keywords: ["te", "tes", "test"],
};

const AboutUs = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />
      <main className="container main-section body-color about-page">
        <section>
          <h2>{t("about_page.who_are_we")}</h2>
          <p>{t("about_page.who_are_we_desc")}</p>

          <h2>{t("about_page.why_quantex")}</h2>
          <p>{t("about_page.why_quantex_desc")}</p>
        </section>
        <section>
          <Image src={AboutImg} alt="ServicesImg" />
        </section>
      </main>

      <main className="container main-section section-color">
        <div className="about-card-container">
          <AboutUsCards
            title={t("about_page.what_we_do")}
            desc={t("about_page.what_we_do_desc")}
            icon={faQuestionCircle}
          />
          <AboutUsCards
            title={t("about_page.our_mission")}
            desc={t("about_page.our_mission_desc")}
            icon={faRocket}
          />
          <AboutUsCards
            title={t("about_page.our_vision")}
            desc={t("about_page.our_vision_desc")}
            icon={faEye}
          />
          <AboutUsCards
            title={t("about_page.quality_first")}
            desc={t("about_page.quality_first_desc")}
            icon={faStar}
          />
        </div>
      </main>
    </>
  );
};

export default AboutUs;
