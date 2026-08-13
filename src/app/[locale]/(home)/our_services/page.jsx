import ServiceCard from "@/components/services/ServiceCard";
import { colors } from "@/constants/colors";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCloud,
  faCode,
  faMobile,
  faNetworkWired,
  faRobot,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ServicesImg from "@/assets/services.svg";
import "./style.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { categories } from "@/constants/enums";
import MainTitle from "@/components/main_title/MainTitle";

export const metadata = {
  title: "our services",
  description: "meta description",
  keywords: ["te", "tes", "test"],
};

const Services = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="container main-section body-color services-page">
        <section>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            soluta inventore esse quas nobis suscipit cum vitae impedit vero
            iure. Fugit aut nulla consectetur quidem eaque labore doloribus
            tempore maiores?
          </p>
        </section>
        <section>
          <Image src={ServicesImg} alt="ServicesImg" />
        </section>
      </main>

      <main className="container main-section">
        <MainTitle>our services</MainTitle>
        <div className="services-container grid-3">
          <ServiceCard
            icon={categories.softwareDevelopment.icon}
            title="Software Development"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,"
            tags={[{ text: "react", icon: faReact }, { text: "test" }]}
            theme={categories.softwareDevelopment.color}
          />
          <ServiceCard
            icon={categories.cybersecurityAndPentesting.icon}
            theme={categories.cybersecurityAndPentesting.color}
            title="Cybersecurity & Pentesting"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
          />
          <ServiceCard
            icon={categories.webApps.icon}
            theme={categories.webApps.color}
            title="Web Apps"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
          />
          <ServiceCard
            title="Network Engineering"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.network_Engineering.icon}
            theme={categories.network_Engineering.color}
          />
          <ServiceCard
            title="server management"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.serverManagement.icon}
            theme={categories.serverManagement.color}
          />
          <ServiceCard
            title="AI Development"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.aiDevelopment.icon}
            theme={categories.aiDevelopment.color}
          />
          <ServiceCard
            title="SAAS"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.SAAS.icon}
            theme={categories.SAAS.color}
          />
          <ServiceCard
            title="cloudProducts"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.cloudProducts.icon}
            theme={categories.cloudProducts.color}
          />
          <ServiceCard
            title="mobileApps"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            icon={categories.mobileApps.icon}
            theme={categories.mobileApps.color}
          />
        </div>
      </main>
    </>
  );
};

export default Services;
