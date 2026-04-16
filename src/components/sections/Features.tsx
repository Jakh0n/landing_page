"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Target,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES, SECTION_COPY } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Award,
  Clock,
  Target,
  Headphones,
};

export function Features() {
  const { badge, title, subtitle } = SECTION_COPY.features;
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? BookOpen;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg sm:p-6"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:text-indigo-400">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
