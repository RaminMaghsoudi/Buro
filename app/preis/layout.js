import classess from "./page.module.css";
import { Box } from "@mui/material";

export default async function PriceLayout({ children }) {
  return <Box className={classess.SlugPreis}>{children}</Box>;
}
