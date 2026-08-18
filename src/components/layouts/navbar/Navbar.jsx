"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faChevronDown,
  faGlobe,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import languages from "@/constants/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import "./style.css";
import { useAppContext } from "@/context/AppContext";
import { pages } from "@/constants/pages";
import NavLink from "@/components/NavLink";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import SideBar from "../sidebar/SideBar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { toggleOpen, isOpen, ref } = useClickOutside();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { changeMode } = useAppContext();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(newLocale) {
    router.replace(pathname, {
      locale: newLocale,
    });
  }

  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBarOpen]);

  const t = useTranslations();

  return (
    <>
      <header className="container home-navbar">
        <Link href="/" className="center">
          <Image alt="logo" src={Logo} className="logo" />
        </Link>
        <nav className="links-container">
          <NavLink href="/">{t("pages.home")}</NavLink>
          <NavLink href={pages.aboutUs}>{t("pages.about_us")}</NavLink>
          <NavLink href={pages.contactUs}>{t("pages.contact_us")}</NavLink>
          <NavLink href={pages.ourServices}>{t("pages.our_services")}</NavLink>
          <NavLink href={pages.projects}>{t("pages.projects")}</NavLink>
        </nav>
        <div className="settings">
          <div
            className="language-container itm"
            ref={ref}
            onClick={toggleOpen}
          >
            <div className="selected-lang">
              <FontAwesomeIcon icon={faGlobe} />
              <span>{locale}</span>
              <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            </div>
            {isOpen && (
              <article className="languages">
                {languages.map((lang) => (
                  <p
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={locale === lang.code ? "active" : ""}
                  >
                    {lang.name}
                  </p>
                ))}
              </article>
            )}
          </div>
          <div className="mode itm" onClick={changeMode}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="itm" onClick={() => setSideBarOpen(!sideBarOpen)}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
        </div>
      </header>
      {sideBarOpen && <SideBar setIsOpen={setSideBarOpen} />}
    </>
  );
};

export default Navbar;
