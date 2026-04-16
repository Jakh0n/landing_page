"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_SECTION } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function CTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-5 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-20 md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 size-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/4 top-1/4 size-4 rounded-full bg-white/20" />
            <div className="absolute right-1/3 top-1/2 size-3 rounded-full bg-white/20" />
            <div className="absolute bottom-1/4 left-1/2 size-5 rounded-full bg-white/15" />
          </div>

          <div className="relative">
            <motion.div variants={fadeInUp} className="mb-4 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
                <Sparkles className="size-4" />
                {CTA_SECTION.badge}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-balance text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {CTA_SECTION.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-xl text-base text-white/85 sm:mt-4 sm:text-lg"
            >
              {CTA_SECTION.subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
            >
              <Button
                size="lg"
                className="h-12 min-h-12 w-full touch-manipulation gap-2 bg-white px-6 text-base text-indigo-700 hover:bg-white/90 sm:w-auto sm:px-8"
                onClick={() => scrollTo("#pricing")}
              >
                {CTA_SECTION.ctaPrimary}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 min-h-12 w-full touch-manipulation border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto sm:px-8"
                onClick={() => scrollTo("#courses")}
              >
                {CTA_SECTION.ctaSecondary}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
