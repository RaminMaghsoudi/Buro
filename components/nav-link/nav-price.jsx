"use client";

import { Box } from "@mui/material";
import classess from "./nav-price.module.css";
import { LiaEuroSignSolid } from "react-icons/lia";
import { BsShield } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";

export default function NavPrice() {
  const features = [
    {
      id: 1,
      icon: LiaEuroSignSolid,
      title: "Faire Preise",
      description:
        "Wir bieten faire und transparente Preise ohne versteckte Kosten. Qualität und ein gutes Preis-Leistungs-Verhältnis stehen bei uns im Mittelpunkt.",
    },
    {
      id: 2,
      icon: BsShield,
      title: "Keine versteckten Kosten",
      description:
        "Bei uns gibt es keine versteckten Kosten – alle Preise sind fair und transparent. Sie wissen von Anfang an, welche Kosten auf Sie zukommen.",
    },
    {
      id: 3,
      icon: CgMenuGridO,
      title: "Individuelle Angebote",
      description:
        "Wir bieten individuelle Angebote, die zu Ihrem Unternehmen passen. Gemeinsam finden wir die passende Lösung für Sie.",
    },
    {
      id: 4,
      icon: TfiTimer,
      title: "Schnelle Umsetzung",
      description:
        "Wir setzen Ihre Projekte schnell und effizient um. Dabei achten wir auf Qualität und eine termingerechte Fertigstellung.",
    },
  ];
  return (
    <nav className={classess.navigate} aria-label="Hauptnavigation">
      {features.map((item) => {
        const Icon = item.icon;
        return (
          <Box
            key={item.id}
            className={`${classess.fadeUp} ${classess.delay5} ${classess.nav}`}
          >
            <Icon size={35} className={classess.icon} />
            <p className={classess["icon-title"]}>{item.title}</p>
            <span className={classess["icon-subTitle"]}>
              {item.description}
            </span>
          </Box>
        );
      })}
    </nav>
  );
}
