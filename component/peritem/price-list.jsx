import { Box } from "@mui/material";
import classess from "./price-list.module.css";
import { Icons } from "@/data/DATA";
import Link from "next/link";

export default function PriceList({ span, sub, idicon, decodedSlug }) {
  const icon = Icons.find((item) => item.id === idicon);
  const Icon = icon?.icon;
  const icon47 = Icons.find((item) => item.id === 47);
  const Icon47 = icon47?.icon;

  return (
    <Link
      href={`${decodedSlug}/${span}`}
      className={classess["wrapper-price-list-item"]}
      // className={
      //   currentSlug === SM.title
      //     ? classess.active
      //     : classess["wrapper-price-list-item"]
      // }
    >
      <Box className={classess.icons}>
        <Box className={classess.icon}>
          {Icon && (
            <Icon
              size={23}
              className={classess["icon-style"]}
              color="#477073"
            />
          )}
        </Box>
      </Box>
      <Box className={classess.info}>
        <span>{span}</span>
        <sub>{sub}</sub>
      </Box>
      <Box className={classess.direction}>
        <Icon47 className={classess.Forward} color="#696969" />
      </Box>
    </Link>
  );
}
