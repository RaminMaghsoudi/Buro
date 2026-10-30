"use client";

import styles from "./Stepper.module.css";

export default function Stepper() {
  const steps = [
    {
      id: 1,
      label: "Der Aktivität",
      description: " Haupttitel der Aktivität",
    },
    {
      id: 2,
      label: "Der Aktivität",
      description: " Haupttitel der Aktivität",
    },
    {
      id: 3,
      label: "Der Aktivität",
      description: " Haupttitel der Aktivität",
    },
    {
      id: 4,
      label: "Der Aktivität",
      description: " Haupttitel der Aktivität",
    },
    {
      id: 5,
      label: "Der Aktivität",
      description: " Haupttitel der Aktivität",
    },
  ];
  return (
    <div className={styles.stepper}>
      {steps.map((item) => (
        <div key={item.id} className={styles.stepp}>
          <div
            className={
              steps.length !== item.id
                ? styles["stepp-number"]
                : styles["stepp-number-empty"]
            }
          >
            {item.id}
          </div>
          <span className={styles["stepp-title"]}>{item.label}</span>
          <span className={styles["stepp-suTitle"]}>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
