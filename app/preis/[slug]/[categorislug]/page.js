import H4 from "@/component/motion/H4";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import DIV from "@/component/motion/DIV";

export default async function CategoriSlug({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return <main className={classess.CategoriSlug}></main>;
}
