"use client";

import { motion } from "motion/react";

export default function P({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.header
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.header>
  );
}
