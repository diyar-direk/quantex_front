"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/buttons/IconButton";
import NavLink from "@/components/NavLink";
import { homePages } from "@/constants/pages";
const SideBar = ({ setIsOpen }) => {
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
      </aside>
    </div>
  );
};

export default SideBar;
