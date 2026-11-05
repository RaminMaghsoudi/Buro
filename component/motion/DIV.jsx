"use client";

import { motion } from "motion/react";

export default function DIV({
  children,
  className,
  initial,
  animate,
  transition,
}) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
