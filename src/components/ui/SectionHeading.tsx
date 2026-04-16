"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { GradientBadge } from "./GradientBadge";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
}

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="mx-auto mb-10 max-w-2xl px-1 text-center sm:mb-16 sm:px-0"
    >
      <GradientBadge>{badge}</GradientBadge>
      <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}
