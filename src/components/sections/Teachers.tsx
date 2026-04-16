"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeacherCard } from "@/components/ui/TeacherCard";
import { TEACHERS, SECTION_COPY } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

export function Teachers() {
  const { badge, title, subtitle } = SECTION_COPY.teachers;
  return (
    <section id="teachers" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEACHERS.map((teacher) => (
            <motion.div key={teacher.id} variants={fadeInUp}>
              <TeacherCard teacher={teacher} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
