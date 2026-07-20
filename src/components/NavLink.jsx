"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href = "/",
  children,
  className = "",
  activeClassName = "active",
}) => {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
