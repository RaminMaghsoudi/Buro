import H1 from "../motion/H1";
import H3 from "../motion/H3";
import H4 from "../motion/H4";
import classess from "./header-price.module.css";
import { Box } from "@mui/material";

export default function HeaderPrice({ decodedSlug }) {
  return (
    <main className={classess.HeaderPrice}>
      <H3
        className={classess.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        aria-labelledby="office-title"
      >
        Preis
      </H3>
      <H1
        className={classess.subTitle}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        aria-labelledby="office-subtitle"
      >
        Preis Anbieter
      </H1>
    </main>
  );
}
