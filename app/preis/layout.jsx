import HeaderPrice from "@/component/header/header-price";
import { Box } from "@mui/material";
import classess from "./page.module.css";

export default async function PriceLayout({ children }) {
  return (
    <Box className={classess.PriceLayoutWrapper}>
      <HeaderPrice />
      {children}
    </Box>
  );
}
