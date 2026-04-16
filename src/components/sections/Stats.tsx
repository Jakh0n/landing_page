"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

export function Stats() {
  return (
    <section id="stats" className="border-y bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-3 min-[400px]:px-4 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:px-8"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl font-extrabold tabular-nums text-indigo-600 dark:text-indigo-400 min-[400px]:text-4xl sm:text-5xl">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-1.5 max-w-[11rem] text-xs font-medium leading-snug text-muted-foreground sm:mt-2 sm:max-w-none sm:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
