import { Box } from "@mui/material";
import classess from "./home-page.module.css";
import { FaSquare } from "react-icons/fa6";
import NavLink from "../nav-link/nav-link";
import Image from "next/image";
import cycle from "@/assets/images/image.jpg";
import H2 from "../motion/H2";
import H3 from "../motion/H3";
import P from "../motion/P";
import DIV from "../motion/DIV";

export default function HomePage() {
  return (
    <main className={classess["home-page"]}>
      <Box className={classess["Wrapper-info"]} aria-labelledby="office-title">
        <H2
          className={classess.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Büroautomatisierung - Effizient und Modern
        </H2>
        <DIV
          className={classess.points}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <FaSquare className={classess.FaSquare} size={7} />
          <FaSquare className={classess.FaSquare} size={7} />
          <FaSquare className={classess.FaSquare} size={7} />
        </DIV>
        <H3
          className={classess.subTitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Büroautomatisierung mit <strong>BüROAUT</strong>
        </H3>
        <P
          className={classess.describe}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Die Büroautomatisierung erleichtert die täglichen Arbeitsabläufe durch
          digitale Lösungen und moderne Technologien. Sie spart Zeit, reduziert
          Fehler und verbessert die Produktivität im Büro.
        </P>
        <nav className={classess.navigate} aria-label="Hauptnavigation">
          <DIV
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <NavLink href="/preis">
              <Box className={classess.navlink1}>Preis</Box>
            </NavLink>
          </DIV>
          <DIV
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <NavLink href="/aufgaben">
              <Box className={classess.navlink2}>Aufgaben</Box>
            </NavLink>
          </DIV>
        </nav>
      </Box>
      <DIV
        className={classess["Wrapper-image"]}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          className={classess["Wrapper-Image"]}
          src={cycle}
          alt="cycle"
          priority
        />
      </DIV>
    </main>
  );
}
