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
    </Box>
  );
}
