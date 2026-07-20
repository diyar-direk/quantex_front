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

const Services = () => {
  return (
    <>
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
          <ServiceCard
            icon={faRobot}
            title="AI Agents & Automation"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,"
            tags={[{ text: "react", icon: faReact }, { text: "test" }]}
          />
          <ServiceCard
            icon={faCloud}
            title="SaaS & Cloud Products"
            subTitle="Comprehensive security assessments, penetration testing, and 24/7 SOC services protecting your digital perimeter."
            tags={[{ text: "test" }, { text: "test" }]}
            theme={colors.green}
          />
        </div>
      </main>
    </>
  );
};

export default Services;
