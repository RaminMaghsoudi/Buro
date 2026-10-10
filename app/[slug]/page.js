"use client";

import { Box } from "@mui/material";
import classess from "./page.module.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

export default function SlugPage() {
  const [activeItem, setActiveItem] = useState(null);

  const Servers = [
    "ایجاد حساب کاربری سخا",
    "ورود به سیستم سخا و پرینت برگه سخا بعد از تایید مامور پست",
    "احراز نشانی محل سکونت توسط پست با پرینت و مراجعه مجدد و پرینت سخا",
    "ایجاد حساب کاربری سامانه مالیات خودرو و استعلام با پرداخت از کارت مشتری با پرینت",
  ];

  return (
    <Box className={classess.main}>
      <p className={classess.title}>سخا و نوبت تعویض پلاک</p>
      <p className={classess.url}>www.sakha.epolice.ir</p>
      {Servers.map((SM, ID) => (
        <Box
          key={ID}
          onClick={() => setActiveItem(SM)}
          className={`${classess.Item} ${
            activeItem === SM ? classess.active : ""
          }`}
        >
          <MdCheckBoxOutlineBlank
            size={15}
            style={{
              position: "relative",
              left: "7px",
              top: "3px",
              paddingRight: "5px",
            }}
          />
          <span className={classess.itemTitle}>{SM}</span>
          <span className={classess.dots}></span>
          <span className={classess.price}>144.000</span>
        </Box>
      ))}
      {/* <Box className={`${classess.ItemTop} ${classess.Item}`}>
        <MdCheckBoxOutlineBlank
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
        <span className={classess.itemTitle}></span>
        <span className={classess.dots}></span>
        <span className={classess.price}>144.000</span>
      </Box>
      <Box className={classess.Item}>
        <MdCheckBoxOutlineBlank
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
        <span className={classess.itemTitle}></span>
        <span className={classess.dots}></span>
        <span className={classess.price}>74.000</span>
      </Box>
      <Box className={classess.Item}>
        <MdCheckBoxOutlineBlank
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
        <span className={classess.itemTitle}></span>
        <span className={classess.dots}></span>
        <span className={classess.price}>218.000</span>
      </Box>
      <Box className={classess.Item}>
        <MdCheckBoxOutlineBlank
          size={15}
          style={{
            position: "relative",
            left: "7px",
            top: "3px",
            paddingRight: "5px",
          }}
        />
        <span className={classess.itemTitle}>
          <br />
          <span className={classess.itemsubTitle}>
            ( هزینه پرداخت نوبت تعویض پلاک از کارت مشتری جداگانه )
          </span>
        </span>
        <span className={classess.dots}></span>
        <span className={classess.price}>218.000</span>
      </Box> */}
    </Box>
  );
}
