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
import { FEATURES } from "@/lib/constants";
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
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Everything You Need to Succeed"
          subtitle="We provide the tools, resources, and support to help you achieve your learning goals faster."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? BookOpen;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
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
