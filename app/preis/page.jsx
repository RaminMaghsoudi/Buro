import PriceHeader from "@/components/header/price-header";
import NavPrice from "@/components/nav-link/nav-price";
import { Box } from "@mui/material";
import classess from "./page.module.css";

export default function PreisPage() {
  return (
    <Box className={classess.SlugPreis}>
      <PriceHeader />
      <NavPrice position="page-price" />
    </Box>
  );
}
