import Image from "next/image";
import classess from "./page.module.css";
import { Box } from "@mui/material";
import cycle from "@/assets/images/image.jpg";
import { FaSquare } from "react-icons/fa6";
import NavLink from "@/components/nav-link/nav-link";
import NavPrice from "@/components/nav-link/nav-price";

export default function PreisPage() {
  return (
    <Box className={classess.Wrapper}>
      <h3 className={classess.title} aria-labelledby="office-title">
        Preis
      </h3>
      <h1 className={classess.subTitle}>Preis Anbieter</h1>
      <Box
        className={`${classess.points} ${classess.fadeIn} ${classess.delay2}`}
      >
        <Box className={classess.P1}></Box>
        <Box className={classess.P2}></Box>
        <Box className={classess.P3}></Box>
      </Box>
      <NavPrice />
      {/* <Box
        className={`${classess["Wrapper-info"]}`}
        aria-labelledby="office-title"
      >
        <h2
          className={`${classess.title} ${classess.fadeUp} ${classess.delay1}`}
        >
          TRABSPARENTE PREISE - STARKE LöSUNGEN
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
          Unsere Preise <strong>auf einen Blick</strong>
        </h3>
        <p
          className={`${classess.describe} ${classess.fadeUp} ${classess.delay4}`}
        >
          Faire und transparente Preise für moderne Büroautomatisierung, Wir
          beiten Ihnen flexible Lösungen, die zu Ihrem Unternehmen passen -
          effizient, zuverlässig und zukunftssicher.
        </p>
        <nav className={classess.navigateIcon} aria-label="Hauptnavigation">
          <Box
            className={`${classess.fadeUp} ${classess.delay5} ${classess.LiaEuroSignSolid}`}
          >
            <LiaEuroSignSolid
              size={35}
              style={{ color: "#087e8b", marginBottom: "15px" }}
            />
            <span>Faire</span>
            <span>Preise</span>
          </Box>
          <Box
            className={`${classess.fadeUp} ${classess.delay6} ${classess.LiaEuroSignSolid}`}
          >
            <BsShield
              size={35}
              style={{ color: "#087e8b", marginBottom: "15px" }}
            />
            <span>Keine</span>
            <span>versteckten Kosten</span>
          </Box>
          <Box
            className={`${classess.fadeUp} ${classess.delay7} ${classess.LiaEuroSignSolid}`}
          >
            <CgMenuGridO
              size={35}
              style={{ color: "#087e8b", marginBottom: "15px" }}
            />
            <span>Individuelle</span>
            <span>Angebote</span>
          </Box>
          <Box
            className={`${classess.fadeUp} ${classess.delay8} ${classess.LiaEuroSignSolid}`}
          >
            <TfiTimer
              size={35}
              style={{ color: "#087e8b", marginBottom: "15px" }}
            />
            <span>Schnelle</span>
            <span>Umsetzung</span>
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
      </Box> */}
    </Box>
  );
}
