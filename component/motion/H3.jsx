"use client";

import { motion } from "motion/react";

export default function H3({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.h3
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.h3>
  );
}
