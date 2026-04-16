"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { HERO } from "@/lib/constants";

const FLOAT_ICONS = [Users, BookOpen, Trophy] as const;

const FLOATING_CARDS = HERO.floating.map((item, i) => ({
  icon: FLOAT_ICONS[i] ?? Users,
  label: item.label,
  color:
    i === 0
      ? "from-indigo-500 to-blue-500"
      : i === 1
        ? "from-violet-500 to-purple-500"
        : "from-amber-500 to-orange-500",
  position:
    i === 0
      ? "top-32 -left-4 lg:left-12"
      : i === 1
        ? "top-48 -right-4 lg:right-12"
        : "bottom-32 left-8 lg:left-24",
}));

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden overflow-y-visible pt-[calc(3.5rem+env(safe-area-inset-top,0px))]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 size-64 rounded-full bg-indigo-500/10 blur-3xl sm:size-80" />
        <div className="absolute -right-40 bottom-20 size-64 rounded-full bg-violet-500/10 blur-3xl sm:size-80" />
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl sm:size-96" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-5 flex justify-center sm:mb-6">
            <span className="grid w-full max-w-xl grid-cols-[auto_1fr] items-start gap-x-2 rounded-2xl border border-border/80 bg-muted/40 px-4 py-3 text-xs font-medium leading-snug text-muted-foreground sm:inline-flex sm:w-fit sm:max-w-none sm:items-center sm:gap-2 sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm sm:leading-normal">
              <span className="relative mt-1 flex size-2 shrink-0 sm:mt-0.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              <span
                className="min-w-0 text-center text-balance sm:text-left"
                title={HERO.badge}
              >
                {HERO.badge}
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-balance text-[1.65rem] font-extrabold leading-[1.2] tracking-tight min-[400px]:text-3xl sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-foreground sm:inline">
              {HERO.titleBefore.trimEnd()}
            </span>
            <span className="hidden sm:inline"> </span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent sm:mt-0 sm:inline">
              {HERO.titleBrand}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Button
              size="lg"
              className="h-12 min-h-12 w-full touch-manipulation gap-2 bg-indigo-600 px-6 text-base hover:bg-indigo-700 sm:w-auto sm:min-w-[12rem] sm:px-8"
              onClick={() => scrollTo("#contact")}
            >
              {HERO.ctaPrimary}
              <ArrowRight className="size-4 shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 min-h-12 w-full touch-manipulation gap-2 px-6 text-base sm:w-auto sm:min-w-[12rem] sm:px-8"
              onClick={() => scrollTo("#courses")}
            >
              <Play className="size-4 shrink-0" />
              {HERO.ctaSecondary}
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
                className="flex max-w-[11rem] items-center gap-3 rounded-2xl border bg-card/80 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:max-w-none sm:px-4 sm:py-3"
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:size-10 ${card.color}`}
                >
                  <card.icon className="size-4 text-white sm:size-5" />
                </div>
                <span className="text-left text-xs font-semibold leading-tight sm:text-sm">
                  {card.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-8"
      >
        <button
          type="button"
          onClick={() => scrollTo("#stats")}
          className="flex min-h-11 min-w-11 touch-manipulation flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label={HERO.scrollHint}
        >
          <span className="text-xs">{HERO.scrollHint}</span>
          <ChevronDown className="size-5" />
        </button>
      </motion.div>
    </section>
  );
}
