import { LiaEuroSignSolid } from "react-icons/lia";
import { GoChecklist } from "react-icons/go";
import { TfiTimer } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

export const Features_Price = [
  {
    id: 1,
    icon: LiaEuroSignSolid,
    title: "Neuen Preis hinzufügen",
    description:
      "Erstellen Sie neue Preise und fügen Sie alle wichtigen Informationen hinzu. Verwalten Sie Ihre Preise einfach und übersichtlich.",
    href: "/preis",
  },
  {
    id: 2,
    icon: GoChecklist,
    title: "Preis Liste",
    description:
      "Hier finden Sie alle gespeicherten Preise auf einen Blick. Bearbeiten, ergänzen und verwalten Sie Ihre Preise ganz einfach.",
    href: "/preis",
  },
  {
    id: 3,
    icon: CgMenuGridO,
    title: "Vorhandene Rechnungen",
    description:
      "Greifen Sie auf bereits erstellte Rechnungen zu. Sehen Sie Rechnungsdetails ein und verwalten Sie Ihre bisherigen Abrechnungen.",
    href: "/rechnungen",
  },
  {
    id: 4,
    icon: TfiTimer,
    title: "Preis Liste der Innung",
    description:
      "Hier finden Sie die offiziellen Preislisten Ihrer Innung. Nutzen Sie die hinterlegten Preise als Grundlage für Ihre Kalkulationen.",
    href: "/preis",
  },
];
export const menus = [
  { title: "Preis", href: "/preis", icon: FaCanadianMapleLeaf },
  { title: "Rechnungen", href: "/rechnungen", icon: FaCanadianMapleLeaf },
  { title: "Aufgaben", href: "/aufgaben", icon: FaCanadianMapleLeaf },
  { title: "Buchhaltung", href: "/buchhaltung", icon: FaCanadianMapleLeaf },
];
export const steps = [
  {
    id: 1,
    label: "Der Aktivität",
    description: "Haupttitel der Aktivität",
  },
  {
    id: 2,
    label: "Der Titel",
    description: "Haupttitel der Titel",
  },
  {
    id: 3,
    label: "Der Untertitel",
    description: "Haupttitel der Untertitel",
  },
  {
    id: 4,
    label: "Der Preis",
    description: "Preis der Aktivität",
  },
];
