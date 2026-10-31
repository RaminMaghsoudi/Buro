"use client";

import { Box } from "@mui/material";
import Stepper from "../stepper/Stepper";
import classess from "./preisform.module.css";
import { useState, useActionState } from "react";
import { Save_Price } from "@/lib/actions";
import PriceFormSubmit from "./price_form_submit";

export default function PreisForm() {
  const steps = [
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box className={`fadeUp delay5 ${classess.Wrap}`}>
      <Box className={classess.Roadmap}>
        <Stepper steps={steps} isActive={isActive} setIsActive={setIsActive} />
      </Box>
      <Box className={classess["title-form"]}>
        {/* <form id="preis-form" className={classess.form} action={formAction}>
          <input
            className={classess.input}
            placeholder="Bitte geben Sie den der Aktivität"
            type="text"
            id="activate"
            name="activate"
            required
            style={{ display: isActive.id === 1 ? "block" : "none" }}
          />
          <input
            className={classess.input}
            placeholder="Bitte geben Sie die Art der Aktivität an."
            type="text"
            id="title"
            name="title"
            required
            style={{ display: isActive.id === 2 ? "block" : "none" }}
          />
          <textarea
            className={classess.textarea}
            placeholder="Falls du eine Erklärung hast, füge sie hinzu."
            id="subtitle"
            name="subtitle"
            required={isActive.id === 3}
            style={{ display: isActive.id === 3 ? "block" : "none" }}
          />
          <input
            className={classess.input}
            placeholder="Geben Sie den Stückpreis an."
            type="text"
            id="price"
            name="price"
            required
            style={{ display: isActive.id === 4 ? "block" : "none" }}
            onChange={(e) => setInputValuePrice(e.target.value)}
          />
          <p className={classess.actions}>
            <PriceFormSubmit />
          </p>
        </form> */}
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
            id="price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            required
            style={{ display: isActive.id === 4 ? "block" : "none" }}
          />
          {isFormValid && (
            <p className={`imageReveal delay1 ${classess.actions}`}>
              <PriceFormSubmit />
            </p>
          )}
        </form>
      </Box>
    </Box>
  );
}
