"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={className}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
