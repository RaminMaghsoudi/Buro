import { Box } from "@mui/material";
import classess from "./price-header.module.css";

export default function PriceHeader({ decodedSlug }) {
  return (
    <>
      <h3
        className={`fadeUp delay1 ${classess.title}`}
        aria-labelledby="office-title"
      >
        Preis
      </h3>
      <h1 className={` fadeUp delay2 ${classess.subTitle}`}>Preis Anbieter</h1>
      <h4 className={`fadeUp delay3 ${classess.activity}`}>{decodedSlug}</h4>
      <Box className={`fadeUp delay4 ${classess.points}`}>
        <Box className={classess.P1}></Box>
        <Box className={classess.P2}></Box>
        <Box className={classess.P3}></Box>
      </Box>
    </>
  );
}
