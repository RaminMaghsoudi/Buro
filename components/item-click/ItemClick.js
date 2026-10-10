"use client";

import { Box } from "@mui/material";
import classess from "./ItemClick.module.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

export default function ItemClick() {
  const [activeItems, setActiveItems] = useState([]);
  const handleClick = (item) => {
    setActiveItems((prev) =>
      prev.includes(item)
        ? prev.filter((active) => active !== item)
        : [...prev, item],
    );
  };
  const Servers = [
    "ایجاد حساب کاربری سخا",
    "ورود به سیستم سخا و پرینت برگه سخا بعد از تایید مامور پست",
    "احراز نشانی محل سکونت توسط پست با پرینت و مراجعه مجدد و پرینت سخا",
    "ایجاد حساب کاربری سامانه مالیات خودرو و استعلام با پرداخت از کارت مشتری با پرینت",
  ];

  return Servers.map((SM, ID) => (
    <Box
      key={ID}
      onClick={() => handleClick(SM)}
      className={`${classess.Item} ${
        activeItems.includes(SM) ? classess.active : ""
      }`}
    >
      {activeItems.includes(SM) ? (
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

      <span className={classess.itemTitle}>{SM}</span>
      <span className={classess.dots}></span>
      <span className={classess.price}>144.000</span>
    </Box>
  ));
}
