import classess from "./page.module.css";
import { Box } from "@mui/material";

export default function PriceLayout({ children }) {
  return (
    <Box className={classess.Wrapper}>
      <h3
        className={`fadeUp delay1 ${classess.title}`}
        aria-labelledby="office-title"
      >
        Preis
      </h3>
      <h1 className={`fadeUp delay2 ${classess.subTitle}`}>Preis Anbieter</h1>
      <Box className={`fadeUp delay3 ${classess.points}`}>
        <Box className={classess.P1}></Box>
        <Box className={classess.P2}></Box>
        <Box className={classess.P3}></Box>
      </Box>
      {children}
    </Box>
  );
}
