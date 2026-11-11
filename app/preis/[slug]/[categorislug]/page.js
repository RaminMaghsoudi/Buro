import H4 from "@/component/motion/H4";
import { Box } from "@mui/material";
import classess from "./page.module.css";
import DIV from "@/component/motion/DIV";
import { Icons } from "@/data/DATA";

export default async function CategoriSlug({ params }) {
  const { categorislug } = await params;
  const decodedSlug = decodeURIComponent(categorislug);
  const icon = Icons.find((item) => item.id === 48);
  const Icon = icon?.icon;
  const icon49 = Icons.find((item) => item.id === 49);
  const Icon49 = icon49?.icon;
  const icon52 = Icons.find((item) => item.id === 52);
  const Icon52 = icon52?.icon;
  const icon51 = Icons.find((item) => item.id === 51);
  const Icon51 = icon51?.icon;
  const icon53 = Icons.find((item) => item.id === 53);
  const Icon53 = icon53?.icon;

  return (
    <main className={classess.CategoriSlug}>
      <header className={classess.header}>
        <Box className={classess.icon}>
          {Icon && (
            <Icon
              size={50}
              className={classess["icon-style"]}
              color="#04766a"
            />
          )}
        </Box>
        <Box className={classess["header-info"]}>
          <header className={classess["header-info-title"]}>
            {decodedSlug}
          </header>
          <header className={classess["header-info-subtitle"]}>
            www.sakha.epolice.ir
          </header>
          <Box className={classess["header-info-describtion"]}>
            <Icon49 color="#484d64" size={18} />
            <span className={classess.text}>12.10.2026</span>
            <Icon52 color="#484d64" size={13} className={classess.FaRegUser} />
            <span className={classess.text}>Ramin Maghsoudi</span>
            <Icon51 color="#13a740" size={10} className={classess.FaRegUser} />
            <span className={`${classess.text} ${classess.active}`}>Aktiv</span>
          </Box>
        </Box>
      </header>
      <section className={classess.section}>
        <section className={classess["section-list"]}>
          {Icon53 && <Icon size={15} color="#04766a" />}
        </section>
        <section className={classess["section-detail"]}></section>
        <section className={classess["section-note"]}></section>
        <section className={classess["section-cout=rce"]}></section>
      </section>
    </main>
  );
}
