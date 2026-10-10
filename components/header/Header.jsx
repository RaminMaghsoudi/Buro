"use client";

import { Box } from "@mui/material";
import classess from "./Header.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header() {
  const params = useParams();
  const currentSlug = decodeURIComponent(params.slug ?? "");

  const Servers = [
    "سخا و نوبت تعویض پلاک",
    "بیمه ورزشی",
    "سامانه ملی مجوزها",
    "ثبت احوال NCR",
    "سامانه سپتام",
    "پلیس اماکن",
  ];

  return (
    <Box className={classess.header}>
      <input className={classess.search} placeholder="Search Items ...." />
      <Box className={classess.addItems}>ADD PRICES</Box>
      <Box className={classess.Items}>
        {Servers.map((SM, ID) => (
          <Link
            key={ID}
            href={`/${SM}`}
            className={`${classess.Item} ${
              currentSlug === SM ? classess.active : ""
            }`}
          >
            <span className={classess.ItemTitle}>{SM}</span>
            <span className={classess.ItemSubTitle}>www.sakkha.epolice.ir</span>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
