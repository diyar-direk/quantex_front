"use client";
import { faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClickOutside } from "@/hooks/useClickOutside";
import languages from "@/constants/languages";
import Tooltip from "@/components/tooltip/Tooltip";
import { useAppContext } from "@/context/AppContext";
import { Link } from "@/i18n/navigation";

const TopHeader = () => {
  const { isOpen, ref, toggleOpen } = useClickOutside();
  const { changeMode } = useAppContext();

  return (
    <div className="top-header">
      <Link href="/" className="logo">
        quanetx
      </Link>
      <article>
        <Tooltip text="mode" placement="bottom" onClick={changeMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Tooltip>
        <div className="language-container relative" ref={ref}>
          <Tooltip text="language" placement="bottom" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faLanguage} />
          </Tooltip>
          {isOpen && (
            <div className="language-options">
              {languages.map((e) => (
                <p key={e.code}>{e.name}</p>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default TopHeader;
