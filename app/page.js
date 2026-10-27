import Image from "next/image";
import classess from "./page.module.css";
import { Box } from "@mui/material";
import cycle from "@/assets/images/image.jpg";
import { FaSquare } from "react-icons/fa6";
import NavLink from "@/components/nav-link/nav-link";

export default function Home() {
  return (
    <Box className={classess.Wrapper}>
      <Box
        className={`${classess["Wrapper-info"]}`}
        aria-labelledby="office-title"
      >
        <h2
          className={`${classess.title} ${classess.fadeUp} ${classess.delay1}`}
        >
          Büroautomatisierung - Effizient und Modern
        </h2>
        <Box
          className={`${classess.points} ${classess.fadeIn} ${classess.delay2}`}
        >
          <FaSquare className={classess.FaSquare} size={7} />
          <FaSquare className={classess.FaSquare} size={7} />
          <FaSquare className={classess.FaSquare} size={7} />
        </Box>
        <h3
          className={`${classess.subTitle} ${classess.fadeUp} ${classess.delay3}`}
        >
          Büroautomatisierung mit <strong>BüROAUT</strong>
        </h3>
        <p
          className={`${classess.describe} ${classess.fadeUp} ${classess.delay4}`}
        >
          Die Büroautomatisierung erleichtert die täglichen Arbeitsabläufe durch
          digitale Lösungen und moderne Technologien. Sie spart Zeit, reduziert
          Fehler und verbessert die Produktivität im Büro.
        </p>
        <nav className={classess.navigate} aria-label="Hauptnavigation">
          <Box className={`${classess.fadeUp} ${classess.delay5}`}>
            <NavLink href="/preis">
              <Box className={classess.navlink1}>Preis</Box>
            </NavLink>
          </Box>
          <Box className={`${classess.fadeUp} ${classess.delay6}`}>
            <NavLink href="/aufgaben">
              <Box className={classess.navlink2}>Aufgaben</Box>
            </NavLink>
          </Box>
        </nav>
      </Box>
      <Box className={`${classess["Wrapper-image"]} ${classess.imageReveal}`}>
        <Image
          className={classess["Wrapper-Image"]}
          src={cycle}
          alt="cycle"
          priority
        />
      </Box>
    </Box>
  );
}
