import Link from "next/link";
import classess from "./main-heder.module.css";
import NavLink from "../nav-link/nav-link";
import { Avatar, Box } from "@mui/material";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

export default function MainHeader() {
  return (
    <header className={classess["main-header"]}>
      <Box className={classess.logo}>
        <Box className={classess["logo-items"]}>
          <FaCanadianMapleLeaf
            size={20}
            className={classess["logo-items-icon"]}
          />
          BüROAUT
          <span>automatisierung</span>
        </Box>
      </Box>
      <Box className={classess.nav}>
        <NavLink href="/news">Preis</NavLink>
        <NavLink href="/archive">Rechnungen</NavLink>
        <NavLink href="/archive">Aufgaben</NavLink>
      </Box>
      <Box className={classess.profile}>
        <Avatar className={classess["profile-avatar"]} />
      </Box>
      {/* <Box className={classess.logo}>
        <Box className={classess.topline}></Box>
        <span className={classess.title}>BüROAUT</span>
        <span className={classess.subtitle}>
          <Box className={classess.line}></Box> automatisierung
        </span>
      </Box>
      <nav>
        <ul className={classess.UL}>
          <NavLink href="/news">Preisübersicht</NavLink>
          <NavLink href="/archive">Rechnungen</NavLink>
          <NavLink href="/archive">Tägliche </NavLink>
        </ul>
      </nav>
      <Box className={classess.profile}>
        <Avatar />
      </Box> */}
    </header>
  );
}
