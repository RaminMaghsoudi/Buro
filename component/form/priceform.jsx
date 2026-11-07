// "use client";

// import { Box } from "@mui/material";
// import Stepper from "../stepper/Stepper";
// import classess from "./priceform.module.css";
// import { useState, useActionState } from "react";
// import { Save_Price } from "@/lib/actions";
// import PriceFormSubmit from "./price_form_submit";
// import { Icons, steps } from "@/data/DATA";
// import DIV from "../motion/DIV";
// import P from "../motion/P";

// export default function PriceForm() {
//   const [isActive, setIsActive] = useState(steps[0]);
//   const [state, formAction] = useActionState(Save_Price, { message: null });
//   const [formValues, setFormValues] = useState({
//     activate: "",
//     title: "",
//     subtitle: "",
//     price: "",
//   });
//   const isFormValid = Object.values(formValues).every(
//     (value) => value.trim() !== "",
//   );
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "price") {
//       const numbers = value.replace(/\D/g, "");
//       setFormValues((prev) => ({
//         ...prev,
//         price: numbers,
//       }));
//       return;
//     }
//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const formatPrice = (value) => {
//     const numbers = value.replace(/\D/g, "");

//     return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   return (
//     <DIV
//       className={classess.Wrap}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 1.8 }}
//     >
//       <Box className={classess.Roadmap}>
//         <Stepper steps={steps} isActive={isActive} setIsActive={setIsActive} />
//       </Box>
//       <Box className={classess["title-form"]}>
//         <form
//           id="preis-form"
//           className={classess.form}
//           action={formAction}
//           onSubmit={(e) => {
//             if (!isFormValid) {
//               e.preventDefault();
//             }
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !isFormValid) {
//               e.preventDefault();
//             }
//           }}
//         >
//           <input
//             className={classess.input}
//             placeholder="Bitte geben Sie den der Aktivität"
//             type="text"
//             id="activate"
//             name="activate"
//             value={formValues.activate}
//             onChange={handleChange}
//             required
//             style={{ display: isActive.id === 1 ? "block" : "none" }}
//           />
//           <input
//             className={classess.input}
//             placeholder="Bitte geben Sie die Art der Aktivität an."
//             type="text"
//             id="title"
//             name="title"
//             value={formValues.title}
//             onChange={handleChange}
//             required
//             style={{ display: isActive.id === 2 ? "block" : "none" }}
//           />
//           <textarea
//             className={classess.textarea}
//             placeholder="Falls du eine Erklärung hast, füge sie hinzu."
//             id="subtitle"
//             name="subtitle"
//             value={formValues.subtitle}
//             onChange={handleChange}
//             required
//             style={{ display: isActive.id === 3 ? "block" : "none" }}
//           />
//           <input
//             className={classess.input}
//             placeholder="Geben Sie den Stückpreis an."
//             type="text"
//             inputMode="numeric"
//             id="price"
//             name="price"
//             value={formatPrice(formValues.price)}
//             onChange={handleChange}
//             required
//             style={{ display: isActive.id === 4 ? "block" : "none" }}
//           />
//           <Box className={classess.Icons}>
//             {Icons.map(({ id, icon: Icon }) => (
//               <Icon key={id} />
//             ))}
//           </Box>
//           {isFormValid && (
//             <P
//               className={classess.actions}
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               <PriceFormSubmit />
//             </P>
//           )}
//         </form>
//       </Box>
//     </DIV>
//   );
// }

"use client";

import { Box } from "@mui/material";
import { useState, useActionState } from "react";

import Stepper from "../stepper/Stepper";
import PriceFormSubmit from "./price_form_submit";

import classess from "./priceform.module.css";

import { Save_Price } from "@/lib/actions";
import { Icons, steps } from "@/data/DATA";

import DIV from "../motion/DIV";
import P from "../motion/P";

export default function PriceForm() {
  const [isActive, setIsActive] = useState(steps[0]);

  const [state, formAction] = useActionState(Save_Price, {
    message: null,
  });

  // اطلاعات فرم
  const [formValues, setFormValues] = useState({
    activate: "",
    title: "",
    subtitle: "",
    price: "",
  });

  // آیکون انتخاب شده
  const [selectedIcon, setSelectedIcon] = useState("");

  // مدیریت تغییر مقادیر فرم
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      const numbers = value.replace(/\D/g, "");

      setFormValues((prev) => ({
        ...prev,
        price: numbers,
      }));

      return;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // فرمت قیمت
  const formatPrice = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // انتخاب آیکون
  const handleIconSelect = (id) => {
    setSelectedIcon(id);
  };

  // اعتبارسنجی مراحل
  const validateStep = (stepId) => {
    const fields = {
      1: "activate",
      2: "title",
      3: "subtitle",
      4: "price",
    };

    // مرحله پنجم: بررسی انتخاب آیکون
    if (stepId === 5) {
      return selectedIcon !== "";
    }

    const fieldName = fields[stepId];

    if (!fieldName) return false;

    const value = formValues[fieldName];

    // اگر توضیحات اختیاری هستند
    if (stepId === 3) return true;

    return value.trim() !== "";
  };

  // اعتبارسنجی قبل از ثبت فرم
  const isFormValid =
    formValues.activate.trim() !== "" &&
    formValues.title.trim() !== "" &&
    formValues.price.trim() !== "" &&
    selectedIcon !== "";

  return (
    <DIV
      className={classess.Wrap}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      {/* Stepper */}
      <Box className={classess.Roadmap}>
        <Stepper
          steps={steps}
          isActive={isActive}
          setIsActive={setIsActive}
          validateStep={validateStep}
        />
      </Box>

      <Box className={classess["title-form"]}>
        <form id="preis-form" className={classess.form} action={formAction}>
          {isActive.id === 1 && (
            <input
              className={classess.input}
              placeholder="Bitte geben Sie den Namen der Aktivität ein."
              type="text"
              id="activate"
              name="activate"
              value={formValues.activate}
              onChange={handleChange}
              required
            />
          )}
          {isActive.id === 2 && (
            <input
              className={classess.input}
              placeholder="Bitte geben Sie die Art der Aktivität an."
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              required
            />
          )}
          {isActive.id === 3 && (
            <textarea
              className={classess.textarea}
              placeholder="Falls du eine Erklärung hast, füge sie hinzu."
              id="subtitle"
              name="subtitle"
              value={formValues.subtitle}
              onChange={handleChange}
            />
          )}
          {isActive.id === 4 && (
            <input
              className={classess.input}
              placeholder="Geben Sie den Stückpreis an."
              type="text"
              inputMode="numeric"
              id="price"
              name="price"
              value={formatPrice(formValues.price)}
              onChange={handleChange}
              required
            />
          )}
          {isActive.id === 5 && (
            <Box className={classess.Icons}>
              {Icons.map(({ id, icon: Icon }) => (
                <Box
                  key={id}
                  type="button"
                  onClick={() => handleIconSelect(id)}
                  className={
                    selectedIcon === id ? classess.selectedIcon : classess.icon
                  }
                >
                  <Icon size={20} />
                </Box>
              ))}
            </Box>
          )}
          <input type="hidden" name="icon" value={selectedIcon} />
          {isActive.id === 5 && isFormValid && (
            <P
              className={classess.actions}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PriceFormSubmit />
            </P>
          )}
        </form>
      </Box>
    </DIV>
  );
}
