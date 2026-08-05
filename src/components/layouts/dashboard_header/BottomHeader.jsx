"use client";
import NavLink from "@/components/NavLink";
import { dashboardPages } from "@/constants/pages";
import { usePathname, useRouter } from "@/i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomHeader = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <div className="bottom-header">
      {dashboardPages?.map((link) => (
        <div
          key={link.to}
          className={`${pathname === link.to ? "active" : ""} link`}
          onClick={() => push(link.to)}
        >
          <h2>
            <FontAwesomeIcon icon={link.icon} />
            {link.title}
          </h2>
          <article>
            {link.children?.map((child) => (
              <NavLink
                href={child.to}
                key={child.to}
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={child.icon} /> {child.title}
              </NavLink>
            ))}
          </article>
        </div>
      ))}
    </div>
  );
};

export default BottomHeader;
