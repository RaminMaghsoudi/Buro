"use client";

import { motion } from "motion/react";

export default function H2({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.h2
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.h2>
  );
}
