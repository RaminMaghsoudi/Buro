import PriceForm from "@/component/form/priceform";
import PriceListPage from "@/component/peritem/price-list-page";
import classess from "./page.module.css";
import { Box } from "@mui/material";
import H4 from "@/component/motion/H4";
import DIV from "@/component/motion/DIV";

export default async function CategorySlugLayout({ params, children }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const pages = {
    "Neuen Preis hinzufügen": <PriceForm />,
    "Preis Liste": <PriceListPage decodedSlug={decodedSlug} />,
  };
  const CurrentPage = pages[decodedSlug] ?? null;

  return (
    <>
      <main className={classess.SlugPageLayout}>
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
      </main>
      <Box className={classess.CategorySlugLayout}>
        {CurrentPage}
        {children}
      </Box>
    </>
  );
}
