"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faChartLine, faClose } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/buttons/IconButton";
import NavLink from "@/components/NavLink";
import { homePages, pages } from "@/constants/pages";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";

const SideBar = ({ setIsOpen }) => {
  const { user } = useAuth();

  const t = useTranslations();

  return (
    <div className="sidebar-overlay" onClick={() => setIsOpen(false)}>
      <aside>
        <div className="close">
          <IconButton
            color="delete"
            styleType="transparent"
            title={t("actions.close")}
            icon={faClose}
            onClick={() => setIsOpen(false)}
          />
        </div>

        {homePages.map((e) => (
          <NavLink key={e.to} href={e.to} className="pages">
            <FontAwesomeIcon icon={e.icon} />
            {t(`pages.${e.title}`)}
          </NavLink>
        ))}
        {user && (
          <NavLink href={pages.dashboard.page} className="pages">
            <FontAwesomeIcon icon={faChartLine} />
            {t("pages.dashboard")}
          </NavLink>
        )}
      </aside>
    </div>
  );
};

export default SideBar;
