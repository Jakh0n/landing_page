"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS, SECTION_COPY } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];
  const { badge, title, subtitle } = SECTION_COPY.testimonials;

  return (
    <section id="testimonials" className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border bg-card p-5 shadow-sm min-[400px]:p-6 sm:p-10 md:p-12">
            <Quote className="mb-6 size-10 text-indigo-500/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 text-base leading-relaxed text-foreground/90 sm:mb-8 sm:text-lg md:text-xl">
                  «{testimonial.quote}»
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-indigo-500/30 bg-muted">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} · {testimonial.course}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-0.5 sm:ml-auto">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Oldingi sharh"
              className="size-11 touch-manipulation rounded-full sm:size-10"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Sharh ${i + 1}`}
                  className={`size-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-indigo-600"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Keyingi sharh"
              className="size-11 touch-manipulation rounded-full sm:size-10"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
