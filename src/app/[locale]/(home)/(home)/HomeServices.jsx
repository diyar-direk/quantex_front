import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import ServiceCard from "@/components/services/ServiceCard";
import { categories } from "@/constants/enums";
import { pages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const HomeServices = () => {
  const t = useTranslations();
  return (
    <main className="container main-section">
      <MainTitle subTitle={t("services_page.sub_title")}>
        {t("pages.our_services")}
      </MainTitle>
      <div className="services-container grid-3">
        {Object.values(categories)
          .slice(0, 6)
          .map((e) => (
            <ServiceCard
              key={e.value}
              icon={e.icon}
              theme={e.color}
              title={t(`enums.${e.value}.title`)}
              subTitle={t(`enums.${e.value}.description`)}
              tags={[
                { text: t(`enums.${e.value}.tags.0`), icon: e.tags?.[0] },
                { text: t(`enums.${e.value}.tags.1`), icon: e.tags?.[1] },
                { text: t(`enums.${e.value}.tags.2`), icon: e.tags?.[2] },
              ]}
            />
          ))}
      </div>
      <div className="center" style={{ marginTop: "10px" }}>
        <Link href={pages.ourServices}>
          <Button> {t("landing.explorer_services")} </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeServices;
