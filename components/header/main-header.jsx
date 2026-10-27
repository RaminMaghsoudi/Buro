import Link from "next/link";
import classess from "./main-heder.module.css";
import NavLink from "../nav-link/nav-link";
import { Avatar, Box } from "@mui/material";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

export default function MainHeader() {
  return (
    <header className={classess["main-header"]}>
      <Box className={classess.logo}>
        <Link href="/" className={classess.navlink}>
          <Box className={classess["logo-items"]}>
            <FaCanadianMapleLeaf
              size={20}
              className={classess["logo-items-icon"]}
            />
            BüROAUT
            <span>automatisierung</span>
          </Box>
        </Link>
      </Box>
      <Box className={classess.nav}>
        <NavLink href="/preis">Preis</NavLink>
        <NavLink href="/rechnungen">Rechnungen</NavLink>
        <NavLink href="/aufgaben">Aufgaben</NavLink>
        <NavLink href="/buchhaltung">Buchhaltung</NavLink>
      </Box>
      <Box className={classess.profile}>
        <Avatar className={classess["profile-avatar"]} />
      </Box>
    </header>
  );
}
