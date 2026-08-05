"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { useLocale } from "next-intl";

const Navbar = () => {
  const { toggleOpen, isOpen, ref } = useClickOutside();
  const { changeMode } = useAppContext();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(newLocale) {
    router.replace(pathname, {
      locale: newLocale,
    });
  }

  return (
    <header className="container home-navbar">
      <Link href="/">
        <Image alt="logo" src={Logo} className="logo" />
      </Link>
      <nav className="links-container">
        <NavLink href="/">home</NavLink>
        <NavLink href={pages.aboutUs}>about us</NavLink>
        <NavLink href={pages.joinUs}>join us</NavLink>
        <NavLink href={pages.contactUs}>contact us</NavLink>
        <NavLink href={pages.ourServices}>services</NavLink>
        <NavLink href={pages.dashboard.page}>dashboard</NavLink>
      </nav>
      <div className="settings">
        <div className="language-container itm" ref={ref}>
          <div className="selected-lang" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faGlobe} />
            <span>{locale}</span>
            <FontAwesomeIcon icon={faChevronDown} />
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
      </div>
    </header>
  );
};

export default Navbar;
