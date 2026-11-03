import { Box } from "@mui/material";
import classess from "./page.module.css";
import Stepper from "@/components/stepper/Stepper";
import PreisForm from "@/components/form/preisform";
import { FiPrinter } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import PriceHeader from "@/components/header/price-header";
import NavPriceFooter from "@/components/nav-link/nav-price-footer";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <Box
      className={classess.slug}
      sx={{
        flexDirection: decodedSlug === "Preis Liste" ? "row" : "column",
        alignItems: decodedSlug === "Preis Liste" ? "flex-start" : "center",
        justifyContent: decodedSlug === "Preis Liste" ? "center" : "flex-start",
      }}
    >
      <Box
        className={classess["slug-header"]}
        sx={{
          alignItems: decodedSlug === "Preis Liste" ? "" : "center",
          justifyContent: decodedSlug === "Preis Liste" ? "" : "center",
          textAlign: decodedSlug === "Preis Liste" ? "" : "center",
          width: decodedSlug === "Preis Liste" ? "300px" : "200px",
          marginTop: decodedSlug === "Preis Liste" ? "50px" : "0px",
        }}
      >
        <PriceHeader decodedSlug={decodedSlug} />
      </Box>
      {decodedSlug === "Neuen Preis hinzufügen" ? (
        <PreisForm />
      ) : decodedSlug === "Preis Liste" ? (
        <Box className={`fadeUp delay6 ${classess["wrapper-price-list"]}`}>
          ads
        </Box>
      ) : null}
      <NavPriceFooter />
    </Box>
  );
}
