// "use client";

// import styles from "./Stepper.module.css";

// export default function Stepper({ steps, isActive, setIsActive }) {
//   function validateCurrentStep() {
//     const form = document.getElementById("preis-form");
//     if (!form) return false;
//     const fieldNames = {
//       1: "activate",
//       2: "title",
//       3: "subtitle",
//       4: "price",
//       5: "icon",
//     };
//     const field = form.elements.namedItem(fieldNames[isActive.id]);
//     if (!field) return false;
//     return field.reportValidity();
//   }
//   function handleNextStep(item) {
//     if (!validateCurrentStep()) return;
//     setIsActive(item);
//   }

//   return (
//     <div className={styles.stepper}>
//       {steps.map((item) => {
//         const isCompleted = item.id < isActive.id;
//         const isCurrent = item.id === isActive.id;
//         const isReached = item.id <= isActive.id;

//         return (
//           <div
//             key={item.id}
//             className={styles.stepp}
//             onClick={() => handleNextStep(item)}
//           >
//             <div
//               className={
//                 steps.length !== item.id
//                   ? styles["stepp-number"]
//                   : styles["stepp-number-empty"]
//               }
//               style={{
//                 backgroundColor: isReached
//                   ? "#009d81"
//                   : "rgba(100,100,100,0.4)",

//                 "--step-line-color": isReached
//                   ? "#009d81"
//                   : "rgba(100,100,100,0.4)",
//               }}
//             >
//               {item.id}
//             </div>
//             <span
//               className={styles["stepp-title"]}
//               style={{
//                 color: isCurrent
//                   ? "black"
//                   : isCompleted
//                     ? "black"
//                     : "rgba(100,100,100)",
//                 fontFamily: isCurrent || isCompleted ? "CB" : "CL",
//               }}
//             >
//               {item.label}
//             </span>
//             <span
//               className={styles["stepp-suTitle"]}
//               style={{
//                 color:
//                   isCurrent || isCompleted
//                     ? "#7b876f"
//                     : "rgba(100,100,100,0.5)",
//                 fontWeight: isCurrent || isCompleted ? "bold" : "normal",
//               }}
//             >
//               {item.description}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import styles from "./Stepper.module.css";

export default function Stepper({
  steps,
  isActive,
  setIsActive,
  validateStep,
}) {
  function handleStepClick(item) {
    // اجازه برگشت به مراحل قبلی
    if (item.id < isActive.id) {
      setIsActive(item);
      return;
    }

    // اجازه ندادن به پرش از مراحل
    if (item.id > isActive.id + 1) return;

    // اعتبارسنجی مرحله فعلی برای رفتن به مرحله بعد
    if (!validateStep(isActive.id)) return;

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
            onClick={() => handleStepClick(item)}
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
                color: isCurrent || isCompleted ? "black" : "rgba(100,100,100)",
                fontFamily: isCurrent || isCompleted ? "CB" : "CL",
              }}
            >
              {item.label}
            </span>

            <span
              className={styles["stepp-suTitle"]}
              style={{
                color: isReached ? "#7b876f" : "rgba(100,100,100,0.5)",
                fontWeight: isReached ? "bold" : "normal",
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
