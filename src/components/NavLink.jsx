"use client";
import { Link, usePathname } from "@/i18n/navigation";

const NavLink = ({
  href = "/",
  children,
  className = "",
  activeClassName = "active",
  ...props
}) => {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
