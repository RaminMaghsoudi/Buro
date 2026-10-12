import ItemClick from "@/components/item-click/ItemClick";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import { getBurosByTitle } from "@/lib/FD";

export default async function HeaderSlug({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const server = await getBurosByTitle(decodedSlug);

  return (
    <Box className={classess.main}>
      <p className={classess.title}>{server[0].title}</p>
      <p className={classess.url}>{server[0].urls}</p>
      {server.every((item) => item.subTitle) && <ItemClick server={server} />}
      <Box className={classess.Factor}></Box>
    </Box>
  );
}
