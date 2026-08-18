import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import Image from "next/image";
import AboutImg from "@/assets/about.svg";
import { Link } from "@/i18n/navigation";
import { pages } from "@/constants/pages";
import { useTranslations } from "next-intl";

const HomeAbout = () => {
  const t = useTranslations();

  return (
    <main className="container main-section section-color">
      <MainTitle subTitle={t("about_page.secondry_title")}>
        {t("pages.about_us")}
      </MainTitle>

      <div className="about-page">
        <section>
          <h2>{t("about_page.who_are_we")}</h2>
          <p>{t("about_page.who_are_we_desc")}</p>

          <h2>{t("about_page.why_quantex")}</h2>
          <p>{t("about_page.why_quantex_desc")}</p>
        </section>

        <section>
          <Image src={AboutImg} alt="About Quantex" />
        </section>
      </div>

      <div className="center gap-10" style={{ marginTop: "10px" }}>
        <Link href={pages.aboutUs}>
          <Button>{t("home.more_about_us")}</Button>
        </Link>

        <Link href={pages.contactUs}>
          <Button btnStyleType="outlined">{t("pages.contact_us")}</Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeAbout;
