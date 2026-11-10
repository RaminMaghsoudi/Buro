import H4 from "@/component/motion/H4";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import DIV from "@/component/motion/DIV";
import { RiDiscountPercentLine } from "react-icons/ri";
import { PiSealPercent } from "react-icons/pi";
import HEADER from "@/component/motion/HEADER";
import P from "@/component/motion/P";
import SPAN from "@/component/motion/SPAN";

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <main className={classess.SlugPage}>
      <HEADER
        className={classess.Header}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <PiSealPercent size={40} className={classess.percent} />
        <SPAN
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          Bitte wählen Sie eines der Elemente aus.
        </SPAN>
      </HEADER>
    </main>
  );
}
