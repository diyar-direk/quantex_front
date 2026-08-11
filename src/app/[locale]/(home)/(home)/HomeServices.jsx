import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import ServiceCard from "@/components/services/ServiceCard";
import { colors } from "@/constants/colors";
import { pages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCode,
  faMobile,
  faNetworkWired,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const HomeServices = () => {
  return (
    <main className="container main-section">
      <MainTitle subTitle={"Lorem ipsum dolor sit"}>our services</MainTitle>
      <div className="services-container grid-3">
        <ServiceCard
          icon={faCode}
          title="Software Development"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,"
          tags={[{ text: "react", icon: faReact }, { text: "test" }]}
        />
        <ServiceCard
          icon={faShieldHalved}
          title="Cybersecurity & Pentesting"
          subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
          tags={[{ text: "test" }, { text: "test" }]}
          theme={colors.green}
        />
        <ServiceCard
          icon={faMobile}
          title="Web & Mobile Apps"
          subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
          tags={[{ text: "test" }, { text: "test" }]}
          theme={colors.move}
        />
        <ServiceCard
          icon={faNetworkWired}
          title="Network Engineering"
          subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
          tags={[{ text: "test" }, { text: "test" }]}
          theme={colors.orange}
        />
        <ServiceCard
          icon={faServer}
          title="server management"
          subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
          tags={[{ text: "test" }, { text: "test" }]}
          theme={colors.blue}
        />
        <ServiceCard
          icon={faBrain}
          title="AI Development"
          subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
          tags={[{ text: "test" }, { text: "test" }]}
          theme={colors.red}
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
