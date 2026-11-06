"use client";

import { motion } from "motion/react";

export default function H4({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.h4
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.h4>
  );
}
