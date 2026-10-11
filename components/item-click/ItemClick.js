"use client";

import { Box } from "@mui/material";
import classess from "./ItemClick.module.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

export default function ItemClick({ server }) {
  const [activeItems, setActiveItems] = useState([]);
  const handleClick = (item) => {
    setActiveItems((prev) =>
      prev.includes(item)
        ? prev.filter((active) => active !== item)
        : [...prev, item],
    );
  };

  return server.map((SM, ID) => (
    <Box
      key={ID}
      onClick={() => handleClick(SM.subTitle)}
      className={`${classess.Item} ${
        activeItems.includes(SM.subTitle) ? classess.active : ""
      }`}
    >
      {activeItems.includes(SM.subTitle) ? (
        <BiMessageSquareCheck
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
      ) : (
        <MdCheckBoxOutlineBlank
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
      )}

      <span className={classess.itemTitle}>{SM.subTitle}</span>
      <span className={classess.dots}></span>
      <span className={classess.price}>{SM.price}</span>
    </Box>
  ));
}
