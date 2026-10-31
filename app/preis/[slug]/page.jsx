import { Box } from "@mui/material";
import classess from "./page.module.css";
import Stepper from "@/components/stepper/Stepper";
import PreisForm from "@/components/form/preisform";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <Box className={classess.wrapper}>
      <h4  className={`fadeUp delay4 ${classess.title}`}>{decodedSlug}</h4>
      <PreisForm />
    </Box>
  );
}
