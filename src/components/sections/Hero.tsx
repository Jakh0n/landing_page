"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, viewportConfig } from "@/lib/animations";

const FLOATING_CARDS = [
  { icon: Users, label: "10K+ Students Online", color: "from-indigo-500 to-blue-500", position: "top-32 -left-4 lg:left-12" },
  { icon: BookOpen, label: "200+ Courses", color: "from-violet-500 to-purple-500", position: "top-48 -right-4 lg:right-12" },
  { icon: Trophy, label: "98% Success Rate", color: "from-amber-500 to-orange-500", position: "bottom-32 left-8 lg:left-24" },
];

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 size-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 size-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              New: AI-Powered Learning Paths Available
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Master New Skills with{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              EduPrime Academy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Join over 10,000 students worldwide. Access 200+ expert-led courses,
            earn recognized certificates, and transform your career with
            hands-on, project-based learning.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-12 gap-2 bg-indigo-600 px-8 text-base hover:bg-indigo-700"
              onClick={() => scrollTo("#courses")}
            >
              Explore Courses
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 px-8 text-base"
              onClick={() => scrollTo("#contact")}
            >
              <Play className="size-4" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none hidden lg:block">
          {FLOATING_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              variants={i === 0 ? fadeInLeft : i === 1 ? fadeInRight : scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`absolute ${card.position}`}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-3 rounded-2xl border bg-card/80 px-4 py-3 shadow-lg backdrop-blur-sm"
              >
                <div
                  className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.color}`}
                >
                  <card.icon className="size-5 text-white" />
                </div>
                <span className="text-sm font-semibold">{card.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("#stats")}
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll down"
        >
          <span className="text-xs">Scroll Down</span>
          <ChevronDown className="size-5" />
        </button>
      </motion.div>
    </section>
  );
}
