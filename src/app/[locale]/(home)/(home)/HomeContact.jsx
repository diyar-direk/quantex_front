import Button from "@/components/buttons/Button";
import { pages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const HomeContact = () => {
  const t = useTranslations();

  return (
    <main className="container main-section">
      <section className="home-contact">
        <h1>{t("home.contact_title")}</h1>

        <p>{t("home.contact_desc")}</p>

        <div className="btns center gap-10">
          <Link href={pages.contactUs}>
            <Button>{t("home.start_project")}</Button>
          </Link>
          <Link href={pages.joinUs}>
            <Button btnStyleType="transparent">{t("pages.join_us")}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomeContact;
