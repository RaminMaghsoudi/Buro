"use client";

import { Box } from "@mui/material";
import Stepper from "../stepper/Stepper";
import classess from "./priceform.module.css";
import { useState, useActionState } from "react";
import { Save_Price } from "@/lib/actions";
import PriceFormSubmit from "./price_form_submit";
import { steps } from "@/data/DATA";
import DIV from "../motion/DIV";
import P from "../motion/P";

export default function PriceForm() {
  const [isActive, setIsActive] = useState(steps[0]);
  const [state, formAction] = useActionState(Save_Price, { message: null });
  const [formValues, setFormValues] = useState({
    activate: "",
    title: "",
    subtitle: "",
    price: "",
  });
  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== "",
  );
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
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
  const formatPrice = (value) => {
    const numbers = value.replace(/\D/g, "");

    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <DIV
      className={classess.Wrap}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <Box className={classess.Roadmap}>
        <Stepper steps={steps} isActive={isActive} setIsActive={setIsActive} />
      </Box>
      <Box className={classess["title-form"]}>
        <form
          id="preis-form"
          className={classess.form}
          action={formAction}
          onSubmit={(e) => {
            if (!isFormValid) {
              e.preventDefault();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isFormValid) {
              e.preventDefault();
            }
          }}
        >
          <input
            className={classess.input}
            placeholder="Bitte geben Sie den der Aktivität"
            type="text"
            id="activate"
            name="activate"
            value={formValues.activate}
            onChange={handleChange}
            required
            style={{ display: isActive.id === 1 ? "block" : "none" }}
          />
          <input
            className={classess.input}
            placeholder="Bitte geben Sie die Art der Aktivität an."
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
            style={{ display: isActive.id === 2 ? "block" : "none" }}
          />
          <textarea
            className={classess.textarea}
            placeholder="Falls du eine Erklärung hast, füge sie hinzu."
            id="subtitle"
            name="subtitle"
            value={formValues.subtitle}
            onChange={handleChange}
            required
            style={{ display: isActive.id === 3 ? "block" : "none" }}
          />
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
            style={{ display: isActive.id === 4 ? "block" : "none" }}
          />
          {isFormValid && (
            <P
              className={classess.actions}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <PriceFormSubmit />
            </P>
          )}
        </form>
      </Box>
    </DIV>
  );
}
