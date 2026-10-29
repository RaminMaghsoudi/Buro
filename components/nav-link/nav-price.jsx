"use client";

import { Box } from "@mui/material";
import classess from "./nav-price.module.css";

import Link from "next/link";
import React, { useState } from "react";
import { Features_Price } from "@/data/DATA";

export default function NavPrice() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className={classess.navigate} aria-label="Hauptnavigation">
      {Features_Price.map((item) => {
        const Icon = item.icon;
        const content = (
          <Box
            className={`
        ${!isClicked ? `fadeUp ${item.delay}` : "fadeOut"}
        ${classess.nav}
      `}
            onClick={() => {
              if (item.id !== 3) {
                setIsClicked(true);
              }
            }}
          >
            <Icon size={35} className={classess.icon} />
            <p className={classess["icon-title"]}>{item.title}</p>
            <span className={classess["icon-subTitle"]}>
              {item.description}
            </span>
          </Box>
        );
        return (
          <Link
            key={item.id}
            href={`${item.href}/${item.title}`}
            className={classess.LINK}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
