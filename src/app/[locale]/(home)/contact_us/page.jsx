import { companyLocation, socialLinks } from "@/constants/links";
import "./style.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import {
  faEnvelope,
  faLink,
  faMessage,
  faPaperPlane,
  faPhone,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import MainTitle from "@/components/main_title/MainTitle";

export const metadata = {
  title: "contact us",
  description: "meta description",
  keywords: ["te", "tes", "test"],
};

const ContactUs = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />
      <main className="container main-section contact-page">
        <MainTitle style={{ width: "100%" }}>{t("pages.contact_us")}</MainTitle>
        <section className="map">
          <h2>
            <FontAwesomeIcon icon={faLink} /> {t("contact_page.social_links")}
          </h2>
          <div className="social-links">
            {Object.entries(socialLinks).map(([key, value]) => (
              <a href={value.link} target="_blank" key={key}>
                <div className="icon">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <div className="info">
                  <h3> {key} </h3>
                  <span> {value.text} </span>
                </div>
              </a>
            ))}
          </div>

          <h2>
            <FontAwesomeIcon icon={companyLocation.icon} />
            {t("contact_page.location")}
          </h2>
          <iframe
            width="100%"
            height="400"
            src={companyLocation.map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <section className="form">
          <h2>
            <FontAwesomeIcon icon={faMessage} />
            {t("contact_page.send_message")}
          </h2>
          <form>
            <Input
              name="name"
              label="name"
              placeholder="enter your name"
              labelIcon={faSignature}
            />
            <Input
              name="phone"
              label="phone"
              placeholder="enter your phone"
              labelIcon={faPhone}
              notRequired
            />
            <Input
              name="email"
              label="email"
              placeholder="enter your email"
              labelIcon={faEnvelope}
            />
            <Input
              name="message"
              label="message"
              placeholder="enter your message"
              elementType="textarea"
              rows={5}
              labelIcon={faMessage}
            />
            <Button btnStyleType="transparent">
              <FontAwesomeIcon icon={faPaperPlane} />
              {t("actions.submit")}
            </Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
