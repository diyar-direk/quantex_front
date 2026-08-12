"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faChartLine, faClose } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/buttons/IconButton";
import NavLink from "@/components/NavLink";
import { homePages, pages } from "@/constants/pages";
import { useAuth } from "@/context/AuthContext";
const SideBar = ({ setIsOpen }) => {
  const { user } = useAuth();

  return (
    <div className="sidebar-overlay" onClick={() => setIsOpen(false)}>
      <aside>
        <div className="close">
          <IconButton
            color="delete"
            styleType="transparent"
            title="close"
            placement="top"
            icon={faClose}
            onClick={() => setIsOpen(false)}
          />
        </div>

        {homePages.map((e) => (
          <NavLink key={e.to} href={e.to} className="pages">
            <FontAwesomeIcon icon={e.icon} />
            {e.title}
          </NavLink>
        ))}
        <NavLink href={pages.dashboard.page} className="pages">
          <FontAwesomeIcon icon={faChartLine} />
          dashboard
        </NavLink>
      </aside>
    </div>
  );
};

export default SideBar;
