"use client";

import { Box } from "@mui/material";
import classess from "./Header.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header({ server }) {
  const params = useParams();
  const currentSlug = decodeURIComponent(params.slug ?? "");
  const uniqueItems = server.filter(
    (item, index, self) =>
      index === self.findIndex((SM) => SM.title === item.title),
  );

  return (
    <Box className={classess.header}>
      <input className={classess.search} placeholder="Search Items ...." />
      <Box className={classess.addItems}>ADD PRICES</Box>
      <Box className={classess.Items}>
        {uniqueItems.map((SM, ID) => (
          <Link
            key={ID}
            href={`/invoices/${SM.title}`}
            className={`${classess.Item} ${
              currentSlug === SM.title ? classess.active : ""
            }`}
          >
            <span className={classess.ItemTitle}>{SM.title}</span>
            <span className={classess.ItemSubTitle}>{SM.urls}</span>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
