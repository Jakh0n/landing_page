"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { COURSE_CARD_UI } from "@/lib/constants";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {imageFailed ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600">
            <BookOpen className="size-14 text-white/50" aria-hidden />
          </div>
        ) : (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-3 top-3">
          <GradientBadge>{course.category}</GradientBadge>
        </div>
        {course.originalPrice && (
          <div className="absolute right-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            {Math.round((1 - course.price / course.originalPrice) * 100)}%{" "}
            {COURSE_CARD_UI.discount}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {course.title}
        </h3>

        <p className="mb-3 text-sm text-muted-foreground">
          {COURSE_CARD_UI.by} {course.instructor}
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground sm:gap-4">
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-2xl">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="h-10 w-full touch-manipulation bg-indigo-600 hover:bg-indigo-700 sm:h-9 sm:w-auto sm:shrink-0"
          >
            {COURSE_CARD_UI.enroll}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
