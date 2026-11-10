"use client";

import { motion } from "motion/react";

export default function SPAN({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.span
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.span>
  );
}
