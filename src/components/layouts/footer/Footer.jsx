import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { socialLinks } from "@/constants/links";
import { homePages } from "@/constants/pages";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="home-footer container">
      <div className="company-section">
        <h2>{t("footer.col_1_title")}</h2>

        <p>{t("footer.col_1_desc")}</p>

        <div className="links">
          <a href={socialLinks.github.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={socialLinks.github.icon} />
          </a>

          <a href={socialLinks.instagram.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={socialLinks.instagram.icon} />
          </a>

          <a href={socialLinks.linkedin.link} target="_blank">
            <FontAwesomeIcon icon={socialLinks.linkedin.icon} />
          </a>

          <a href={socialLinks.twitter.link}>
            <FontAwesomeIcon icon={socialLinks.twitter.icon} />
          </a>
        </div>
      </div>

      <div className="quick-link">
        <h2>{t("footer.col_2_title")}</h2>

        <div className="links">
          {homePages.slice(0, 5).map((e) => (
            <Link href={e.to} key={e.to}>
              {t(`pages.${e.title}`)}
            </Link>
          ))}
        </div>
      </div>

      <div className="quick-link">
        <h2>{t("footer.col_3_title")}</h2>

        <div className="links">
          {homePages.slice(5).map((e) => (
            <Link href={e.to} key={e.to}>
              {t(`pages.${e.title}`)}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-foot">
        <p>{t("footer.copyright")}</p>

        <div className="links">
          <a href={socialLinks.email.link}>
            <FontAwesomeIcon icon={socialLinks.email.icon} />
            {socialLinks.email.text}
          </a>

          <a href={socialLinks.phone.link}>
            <FontAwesomeIcon icon={socialLinks.phone.icon} />
            {socialLinks.phone.text}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
