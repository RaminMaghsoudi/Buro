import { Box } from "@mui/material";
import classess from "./page.module.css";
import { Features_Price } from "@/data/DATA";
import Link from "next/link";
import DIV from "@/component/motion/DIV";

export default async function PreisPage() {
  return (
    <Box className={classess.PreisPage}>
      <nav className={classess.navigate} aria-label="Hauptnavigation">
        {Features_Price.map((item) => {
          const Icon = item.icon;
          const content = (
            <DIV
              className={classess.nav}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay:
                  item.id === 1
                    ? 1.2
                    : item.id === 2
                      ? 1.3
                      : item.id === 3
                        ? 1.4
                        : 1.5,
              }}
            >
              <Icon size={35} className={classess.icon} />
              <p className={classess["icon-title"]}>{item.title}</p>
              <span className={classess["icon-subTitle"]}>
                {item.description}
              </span>
            </DIV>
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
    </Box>
  );
}
