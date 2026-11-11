"use client";

import { Box } from "@mui/material";
import classess from "./price-list.module.css";
import { Icons } from "@/data/DATA";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PriceList({ span, sub, idicon, decodedSlug }) {
  const pathname = usePathname();
  const icon = Icons.find((item) => item.id === idicon);
  const Icon = icon?.icon;
  const icon47 = Icons.find((item) => item.id === 47);
  const Icon47 = icon47?.icon;

  const href = `/preis/${decodedSlug}/${span}`;
  const DecodedSlug = decodeURIComponent(pathname.split("/")[3]);
  const currentSpan = decodeURIComponent(pathname.split("/")[3] || "");
  const isActive = currentSpan === span;

  return (
    <Link
      href={href}
      className={`${classess["wrapper-price-list-item"]} ${
        isActive ? classess.active : ""
      }`}
      onClick={(e) => {
        if (isActive) e.preventDefault();
      }}
      aria-disabled={isActive}
      tabIndex={isActive ? -1 : 0}
    >
      <Box className={classess.icons}>
        <Box className={classess.icon}>
          {Icon && (
            <Icon
              size={23}
              className={classess["icon-style"]}
              color={isActive ? "#f69d10" : "#477073"}
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
