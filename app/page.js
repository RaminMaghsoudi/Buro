import classess from "./page.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className={classess.Wrapper}>
      <Box className={classess.main}>
        {"'"}No items or activities selected.{"'"}
      </Box>
    </Box>
  );
}
