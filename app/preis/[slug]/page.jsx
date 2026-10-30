import { Box } from "@mui/material";
import classess from "./page.module.css";
import Image from "next/image";
import image from "@/assets/images/book.jpg";
import Stepper from "@/components/stepper/Stepper";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const steps = [
    {
      id: 1,
      label: "Hauptaktivität",
      description: "مشخصات کاربر",
    },
    {
      id: 2,
      label: "اطلاعات تماس",
      description: "شماره تماس و ایمیل",
    },
    {
      id: 3,
      label: "اطلاعات حساب",
      description: "نام کاربری و رمز",
    },
    {
      id: 4,
      label: "Hauptaktivität",
      description: "بررسی اطلاعات",
    },
  ];

  return (
    <Box className={classess.wrapper}>
      <h4 className={classess.title}>{decodedSlug}</h4>
      <Box className={classess.Roadmap}>
        <Stepper steps={steps} currentStep={""} />
      </Box>
      <Box className={classess["title-form"]}>
        <Box className={classess.form}>
          <input
            className={classess.input}
            placeholder="Haupt Titel der Aktivität"
          />
          <input className={classess.input} placeholder="Haupt Titel" />
          <input
            className={classess.input}
            placeholder="Artikel beschreibung"
          />
        </Box>
      </Box>
    </Box>
  );
}
