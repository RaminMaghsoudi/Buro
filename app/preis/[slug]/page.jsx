import H4 from "@/component/motion/H4";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import DIV from "@/component/motion/DIV";
import PriceForm from "@/component/form/priceform";

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <main className={classess.SlugPage}>
      <H4
        className={classess.activity}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {decodedSlug}
      </H4>
      <DIV
        className={classess.points}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Box className={classess.P1}></Box>
        <Box className={classess.P2}></Box>
        <Box className={classess.P3}></Box>
      </DIV>
      <PriceForm />
    </main>
  );
}
