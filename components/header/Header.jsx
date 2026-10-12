"use client";

import { Box } from "@mui/material";
import classess from "./Header.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCarSide,
  IoChevronForwardSharp,
  HiOutlineHomeModern,
  GrLicense,
  TfiBookmarkAlt,
  CiSun,
  MdOutlineLocalPolice,
  IoSearchOutline,
} from "@/components/icons";

export default function Header({ server }) {
  const params = useParams();
  const currentSlug = decodeURIComponent(params.slug ?? "");
  const uniqueItems = server.filter(
    (item, index, self) =>
      index === self.findIndex((SM) => SM.title === item.title),
  );

  return (
    <Box className={classess.header}>
      <div className={classess.searchContainer}>
        <IoSearchOutline />
        <input className={classess.search} placeholder="Search Items ..." />
      </div>
      {/* <input className={classess.search} placeholder=`${<IoSearchOutline />} Search Items ....` /> */}
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
            {ID === 0 ? (
              <FaCarSide size={23} className={classess.LuCar} />
            ) : ID === 1 ? (
              <HiOutlineHomeModern size={23} className={classess.LuCar} />
            ) : ID === 2 ? (
              <GrLicense size={21} className={classess.LuCar} />
            ) : ID === 3 ? (
              <TfiBookmarkAlt size={21} className={classess.LuCar} />
            ) : ID === 4 ? (
              <CiSun size={25} className={classess.LuCar} />
            ) : ID === 5 ? (
              <MdOutlineLocalPolice size={23} className={classess.LuCar} />
            ) : null}
            <span className={classess.ItemTitle}>{SM.title}</span>
            <span className={classess.ItemSubTitle}>{SM.urls}</span>
            <IoChevronForwardSharp className={classess.Forward} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
