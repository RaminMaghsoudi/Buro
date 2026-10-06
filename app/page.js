import classess from "./page.module.css";
import { Box } from "@mui/material";
import { RiFunctionAddFill } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SiSaturn } from "react-icons/si";

export default function Home() {
  return (
    <Box className={classess.Wrapper}>
      <header className={classess.header}>
        <RiFunctionAddFill
          style={{
            color: "#808080",
            marginTop: "25px",
            cursor: "pointer",
          }}
        />
      </header>
      <section className={classess.section}>
        <header className={classess.sectionHeader}>
          <IoIosArrowRoundBack
            size={20}
            style={{
              marginRight: "25px",
              cursor: "pointer",
              color: "#808080",
            }}
          />
        </header>
        <main className={classess.sectionTitle}>
          <SiSaturn
            size={50}
            style={{
              color: "#707080",
            }}
          />
          <span className={classess.sectionTitleSpan}>
            Preislistenartikel Hinzufügen
          </span>
        </main>
        <input
          className={classess.sectionInputTitle}
          placeholder="عنوان کلی فعالیت"
        />
        <input
          className={classess.sectionInputSubTitle}
          placeholder="عنوان اصلی فعالیت"
        />
        <input
          className={classess.sectionInputPrice}
          placeholder="قیمت تعیین شده"
        />
      </section>
      <main className={classess.main}>
        Es wurden noch keine Elemente hinzugefügt.
      </main>
    </Box>
  );
}
