import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import ServiceCard from "@/components/services/ServiceCard";
import { categories } from "@/constants/enums";
import { pages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const HomeServices = () => {
  return (
    <main className="container main-section">
      <MainTitle subTitle={"Lorem ipsum dolor sit"}>our services</MainTitle>
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
      </div>
      <div className="center" style={{ marginTop: "10px" }}>
        <Link href={pages.ourServices}>
          <Button> explorer all services </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeServices;
