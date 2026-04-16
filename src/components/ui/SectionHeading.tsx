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
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <GradientBadge>{badge}</GradientBadge>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
