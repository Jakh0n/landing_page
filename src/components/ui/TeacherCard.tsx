"use client";

import Image from "next/image";
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
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={teacher.avatar}
          alt={teacher.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-black/75 p-6 text-center transition-transform duration-300 group-hover:translate-y-0">
          <p className="mb-4 text-sm leading-relaxed text-white/95">{teacher.bio}</p>
          <div className="flex gap-3">
            {teacher.socials.twitter && (
              <a
                href={teacher.socials.twitter}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} — social`}
              >
                <MessageSquare className="size-4 text-white" />
              </a>
            )}
            {teacher.socials.linkedin && (
              <a
                href={teacher.socials.linkedin}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} — LinkedIn`}
              >
                <Briefcase className="size-4 text-white" />
              </a>
            )}
            {teacher.socials.github && (
              <a
                href={teacher.socials.github}
                className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                aria-label={`${teacher.name} — link`}
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
