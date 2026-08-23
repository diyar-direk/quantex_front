import ServiceCard from "@/components/services/ServiceCard";
import Image from "next/image";
import ServicesImg from "@/assets/services.svg";
import "./style.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { categories } from "@/constants/enums";
import MainTitle from "@/components/main_title/MainTitle";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Our Services",
  description:
    "نقدّم في كوانتكس حلولاً برمجية ورقمية متكاملة تشمل تطوير الويب والموبايل، الأنظمة المخصصة، والخدمات التقنية المصممة لتلبية احتياجات الأعمال.",
  keywords: [
    "خدمات كوانتكس",
    "خدمات برمجية",
    "تطوير الويب",
    "تطوير تطبيقات الموبايل",
    "حلول رقمية",
    "خدمات تقنية",
  ],
};

const Services = () => {
  const t = useTranslations();
  return (
    <>
      <Breadcrumbs />
      <main className="container main-section body-color services-page">
        <section>
          <h1> {t("services_page.title")} </h1>
          <p>{t("services_page.paragraph")}</p>
        </section>
        <section>
          <Image src={ServicesImg} alt="ServicesImg" />
        </section>
      </main>

      <main className="container main-section">
        <MainTitle>{t("pages.our_services")}</MainTitle>
        <div className="services-container grid-3">
          {Object.values(categories).map((e) => (
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
      </main>
    </>
  );
};

export default Services;
