"use client";

import { motion } from "framer-motion";
import { Star, Clock, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBadge } from "@/components/ui/GradientBadge";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="size-12 text-white/40" />
        </div>
        <div className="absolute left-3 top-3">
          <GradientBadge>{course.category}</GradientBadge>
        </div>
        {course.originalPrice && (
          <div className="absolute right-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {course.title}
        </h3>

        <p className="mb-3 text-sm text-muted-foreground">
          by {course.instructor}
        </p>

        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {course.duration}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
            Enroll
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
