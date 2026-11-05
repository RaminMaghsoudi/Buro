import Link from "next/link";
import classess from "./main-header.module.css";
import { menus } from "@/data/DATA";
import { Avatar, Box } from "@mui/material";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  const Icon = menus[0].icon;

  return (
    <header className={classess["main-header"]}>
      <Box className={classess.logo}>
        <Link href="/" className={classess.navlink}>
          <Box className={classess["logo-items"]}>
            <Icon size={20} className={classess["logo-items-icon"]} />
            BüROAUT
            <span>automatisierung</span>
          </Box>
        </Link>
      </Box>
      <Box className={classess.nav}>
        {menus.map((menu) => (
          <NavLink key={menu.href} href={menu.href}>
            {menu.title}
          </NavLink>
        ))}
      </Box>
      <Box className={classess.profile}>
        <Avatar className={classess["profile-avatar"]} />
      </Box>
    </header>
  );
}
