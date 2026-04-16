"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function CTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-8 py-16 text-center sm:px-16 sm:py-24"
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
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            >
              Start Your Learning Journey Today
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-xl text-lg text-white/80"
            >
              Join thousands of students already learning with EduPrime Academy.
              Get 30% off your first month with code LEARN30.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-12 gap-2 bg-white px-8 text-base text-indigo-700 hover:bg-white/90"
                onClick={() => scrollTo("#pricing")}
              >
                Get Started Now
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
                onClick={() => scrollTo("#courses")}
              >
                Browse Courses
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
