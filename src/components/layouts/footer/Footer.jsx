import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { companyLocation, socialLinks } from "@/constants/links";
import { homePages, pages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
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
          {homePages.slice(0, 5).map((e) => (
            <Link href={e.to} key={e.to}>
              {e.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="quick-link">
        <h2> quick link </h2>
        <div className="links">
          {homePages.slice(5).map((e) => (
            <Link href={e.to} key={e.to}>
              {e.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="company-info">
        <h2> quantex info </h2>
        <div className="links">
          <a className="itm" href={companyLocation.view} target="_blank">
            <FontAwesomeIcon icon={companyLocation.icon} />
            {companyLocation.text}
          </a>
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
