import "./style.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";
import JoinForm from "./JoinForm";

export const metadata = {
  title: "Join Us",
  description:
    "انضم إلى فريق كوانتكس وكن جزءاً من بيئة تقنية تجمع بين الإبداع والتعلم والتطوير، واستكشف فرص العمل المتاحة لدينا.",
  keywords: [
    "العمل في كوانتكس",
    "انضم إلى كوانتكس",
    "وظائف كوانتكس",
    "فرص عمل برمجية",
    "وظائف تقنية",
    "شركة برمجيات",
  ],
};

const JoinUs = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />

      <main className="join-us-page">
        <section className="image">
          <h1>{t("join_page.title")}</h1>

          <p>{t("join_page.desc")}</p>
        </section>

        <section>
          <JoinForm />
        </section>
      </main>
    </>
  );
};

export default JoinUs;
