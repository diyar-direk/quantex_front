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

const ContactUs = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="container main-section contact-page">
        <section className="map">
          <h2>
            <FontAwesomeIcon icon={faLink} /> social links
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
            company location
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
            <FontAwesomeIcon icon={faMessage} /> or send a message
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
              <FontAwesomeIcon icon={faPaperPlane} /> send
            </Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
