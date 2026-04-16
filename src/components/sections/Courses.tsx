"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSES, COURSE_CATEGORIES } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Courses() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="bg-muted/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Popular Courses"
          title="Explore Our Top Courses"
          subtitle="Hand-picked courses designed by industry experts to accelerate your career growth."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Courses
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
