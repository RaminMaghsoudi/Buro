"use client";

import styles from "./Stepper.module.css";

export default function Stepper({ steps = [], currentStep = 0 }) {
  return (
    <div className={styles.stepper} dir="ltr">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isReached = index <= currentStep;

        return (
          <div className={styles.step} key={step.id ?? step.label}>
            <div className={styles.stepHeader}>
              <div
                className={`${styles.circle} ${
                  isReached ? styles.filled : styles.empty
                } ${isActive ? styles.active : ""}`}
              >
                {isCompleted ? (
                  <span className={styles.check}>✓</span>
                ) : (
                  index + 1
                )}
              </div>

              {index < steps.length - 1 && (
                <div className={styles.lineWrapper}>
                  <div
                    className={`${styles.line} ${
                      isCompleted ? styles.lineCompleted : ""
                    }`}
                  />
                </div>
              )}
            </div>

            <div
              className={`${styles.label} ${
                isActive ? styles.activeLabel : ""
              } ${!isReached ? styles.inactiveLabel : ""}`}
            >
              <span className={styles.title}>{step.label}</span>

              {step.description && (
                <span className={styles.description}>{step.description}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
