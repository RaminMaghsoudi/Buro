import { Box } from "@mui/material";
import classess from "./page.module.css";
import Stepper from "@/components/stepper/Stepper";
import PreisForm from "@/components/form/preisform";
import { FiPrinter } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import PriceHeader from "@/components/header/price-header";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <>
      <PriceHeader />
      <h4 className={`fadeUp delay4 ${classess.activity}`}>{decodedSlug}</h4>
      {/* 
      {decodedSlug === "Neuen Preis hinzufügen" ? (
        <PreisForm />
      ) : decodedSlug === "Preis Liste" ? (
        <Box
          className={`fadeUp delay6 ${classess["wrapper-price-list"]}`}
        ></Box>
      ) : (
        "546"
      )} */}
    </>
  );
}
