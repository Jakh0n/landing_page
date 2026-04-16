"use client";

import { motion } from "framer-motion";
import { Star, Users, MessageSquare, Briefcase, Code2 } from "lucide-react";
import type { Teacher } from "@/types";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-indigo-400 to-violet-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white/30">
            {teacher.name.charAt(0)}
          </span>
        </div>

        <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-black/70 p-6 text-center transition-transform duration-300 group-hover:translate-y-0">
          <p className="mb-4 text-sm leading-relaxed text-white/90">
            {teacher.bio}
          </p>
          <div className="flex gap-3">
            {teacher.socials.twitter && (
              <a
                href={teacher.socials.twitter}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} Twitter`}
              >
                <MessageSquare className="size-4 text-white" />
              </a>
            )}
            {teacher.socials.linkedin && (
              <a
                href={teacher.socials.linkedin}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} LinkedIn`}
              >
                <Briefcase className="size-4 text-white" />
              </a>
            )}
            {teacher.socials.github && (
              <a
                href={teacher.socials.github}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} GitHub`}
              >
                <Code2 className="size-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold">{teacher.name}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{teacher.subject}</p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {teacher.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {teacher.students.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
