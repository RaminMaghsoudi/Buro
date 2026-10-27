"use client";

import styles from "./LinearLoader.module.css";

export default function LinearLoader({ label = "" }) {
  return (
    <div className={styles.wrapper} role="status" aria-label={label}>
      <div className={styles.track}>
        <div className={styles.bar} />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
