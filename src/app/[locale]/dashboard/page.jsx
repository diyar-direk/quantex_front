import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <h1>{t("pages.dashboard")}</h1>
      </main>
    </>
  );
};

export default Dashboard;
