import { Box } from "@mui/material";
import classess from "./page.module.css";
import ItemClick from "@/components/item-click/ItemClick";

export default function SlugPage() {
  return (
    <Box className={classess.main}>
      <p className={classess.title}>سخا و نوبت تعویض پلاک</p>
      <p className={classess.url}>www.sakha.epolice.ir</p>
      <ItemClick />
      <Box className={classess.Factor}></Box>
    </Box>
  );
}
