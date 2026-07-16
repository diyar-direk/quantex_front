"use client";
import Image from "next/image";
import Link from "next/link";
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

const Navbar = () => {
  const { toggleOpen, isOpen, ref } = useClickOutside();
  const { changeMode, isDark } = useAppContext();

  return (
    <header className="container home-navbar">
      <Link href="/">
        <Image alt="logo" src={Logo} className="logo" />
      </Link>
      <nav className="links-container">
        <Link href="/">home</Link>
        <Link href={pages.joinUs}>join us</Link>
      </nav>
      <div className="settings">
        <div className="language-container itm" ref={ref}>
          <div className="selected-lang" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faGlobe} />
            <span>en</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {isOpen && (
            <article className="languages">
              {languages.map((lang) => (
                <p key={lang.code}>{lang.name}</p>
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
