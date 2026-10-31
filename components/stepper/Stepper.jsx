"use client";

import styles from "./Stepper.module.css";

export default function Stepper({ steps, isActive, setIsActive }) {
  function validateCurrentStep() {
    const form = document.getElementById("preis-form");
    if (!form) return false;
    const fieldNames = {
      1: "activate",
      2: "title",
      3: "subtitle",
      4: "price",
    };
    const field = form.elements.namedItem(fieldNames[isActive.id]);
    if (!field) return false;
    return field.reportValidity();
  }
  function handleNextStep(item) {
    if (!validateCurrentStep()) return;
    setIsActive(item);
  }

  return (
    <div className={styles.stepper}>
      {steps.map((item) => {
        const isCompleted = item.id < isActive.id;
        const isCurrent = item.id === isActive.id;
        const isReached = item.id <= isActive.id;

        return (
          <div
            key={item.id}
            className={styles.stepp}
            onClick={() => handleNextStep(item)}
          >
            <div
              className={
                steps.length !== item.id
                  ? styles["stepp-number"]
                  : styles["stepp-number-empty"]
              }
              style={{
                backgroundColor: isReached
                  ? "#009d81"
                  : "rgba(100,100,100,0.4)",

                "--step-line-color": isReached
                  ? "#009d81"
                  : "rgba(100,100,100,0.4)",
              }}
            >
              {item.id}
            </div>
            <span
              className={styles["stepp-title"]}
              style={{
                color: isCurrent
                  ? "black"
                  : isCompleted
                    ? "black"
                    : "rgba(100,100,100)",
              }}
            >
              {item.label}
            </span>
            <span
              className={styles["stepp-suTitle"]}
              style={{
                color:
                  isCurrent || isCompleted
                    ? "rgba(100,100,100)"
                    : "rgba(100,100,100,0.5)",
              }}
            >
              {item.description}
            </span>
          </div>
        );
      })}
    </div>
  );
}
