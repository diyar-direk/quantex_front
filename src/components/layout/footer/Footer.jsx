import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { socialLinks } from "@/constants/links";
import { pages } from "@/constants/pages";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="home-footer container">
      <div className="company-section">
        <h2> quantex company </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          accusamus debitis ex accusantium doloribus!
        </p>
        <div className="links">
          <a href={socialLinks.github.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.github.icon} />
          </a>
          <a href={socialLinks.instagram.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.instagram.icon} />
          </a>
          <a href={socialLinks.email.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.email.icon} />
          </a>
          <a href={socialLinks.phone.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.phone.icon} />
          </a>
        </div>
      </div>
      <div className="quick-link">
        <h2> quick link </h2>
        <div className="links">
          {Object.entries(pages).map(([key, value]) => (
            <Link href={value} key={key}>
              {key}
            </Link>
          ))}
        </div>
      </div>
      <div className="company-info">
        <h2> soical links </h2>
        <div className="links">
          <article className="itm">
            <FontAwesomeIcon icon={socialLinks.location.icon} />
            {socialLinks.location.text}
          </article>
          <a className="itm" href={socialLinks.email.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.email.icon} />
            {socialLinks.email.text}
          </a>
          <a className="itm" href={socialLinks.phone.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.phone.icon} />
            {socialLinks.phone.text}
          </a>
        </div>
      </div>

      <div className="footer-foot">
        <p>© 2026 Quantex. All rights reserved. Engineered for Excellence.</p>
        <div className="links">
          <a href={socialLinks.instagram.link} target="_blank">
            {socialLinks.instagram.text}
          </a>
          <Link href={pages.contactUs}> contact us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
