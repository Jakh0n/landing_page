"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSES, COURSE_CATEGORIES, SECTION_COPY } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Courses() {
  const [activeCategory, setActiveCategory] = useState<string>("Hammasi");

  const filtered =
    activeCategory === "Hammasi"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  const { badge, title, subtitle, viewAll } = SECTION_COPY.courses;

  return (
    <section id="courses" className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10"
        >
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "min-h-10 touch-manipulation rounded-full px-3 py-2 text-xs font-medium transition-all sm:min-h-0 sm:px-5 sm:text-sm",
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-card border hover:bg-muted",
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center sm:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-12 min-h-12 w-full max-w-sm touch-manipulation gap-2 sm:w-auto sm:max-w-none"
          >
            {viewAll}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
