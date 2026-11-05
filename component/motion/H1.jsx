"use client";

import { motion } from "motion/react";

export default function H1({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.h1
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.h1>
  );
}
