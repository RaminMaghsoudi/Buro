import { Box } from "@mui/material";
import classess from "./page.module.css";
import Image from "next/image";
import image from "@/assets/images/book.jpg";
import Stepper from "@/components/stepper/Stepper";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <Box className={classess.wrapper}>
      <h4 className={classess.title}>{decodedSlug}</h4>
      <Box className={classess.Roadmap}>
        <Stepper />
      </Box>
      <Box className={classess["title-form"]}>
        <Box className={classess.form}>
          <input
            className={classess.input}
            placeholder="Haupt Titel der Aktivität"
          />
          <input className={classess.input} placeholder="Haupt Titel" />
          <input
            className={classess.input}
            placeholder="Artikel beschreibung"
          />
        </Box>
      </Box>
    </Box>
  );
}
