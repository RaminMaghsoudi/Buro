"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classess from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <li className={classess.li}>
      <Link
        href={href}
        className={path.startsWith(href) ? classess.active : classess.nav}
      >
        {children}
      </Link>
    </li>
  );
}
