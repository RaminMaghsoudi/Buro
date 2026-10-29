import { LiaEuroSignSolid } from "react-icons/lia";
import { BsShield } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";

export const Features_Price = [
  {
    id: 1,
    icon: LiaEuroSignSolid,
    title: "Neuen Preis hinzufügen",
    description:
      "Erstellen Sie neue Preise und fügen Sie alle wichtigen Informationen hinzu. Verwalten Sie Ihre Preise einfach und übersichtlich.",
    delay: "delay4",
    href: "/preis",
  },
  {
    id: 2,
    icon: BsShield,
    title: "Preis Liste",
    description:
      "Hier finden Sie alle gespeicherten Preise auf einen Blick. Bearbeiten, ergänzen und verwalten Sie Ihre Preise ganz einfach.",
    delay: "delay5",
    href: "/preis",
  },
  {
    id: 3,
    icon: CgMenuGridO,
    title: "Vorhandene Rechnungen",
    description:
      "Greifen Sie auf bereits erstellte Rechnungen zu. Sehen Sie Rechnungsdetails ein und verwalten Sie Ihre bisherigen Abrechnungen.",
    delay: "delay6",
    href: "/rechnungen",
  },
  {
    id: 4,
    icon: TfiTimer,
    title: "Preis Liste der Innung",
    description:
      "Hier finden Sie die offiziellen Preislisten Ihrer Innung. Nutzen Sie die hinterlegten Preise als Grundlage für Ihre Kalkulationen.",
    delay: "delay7",
    href: "/preis",
  },
];
