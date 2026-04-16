"use client";

import { GraduationCap, Send, MessageSquare, Globe, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME, SITE_TAGLINE, FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: MessageSquare, label: "Twitter", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-8 text-indigo-600" />
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_TAGLINE}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border p-2.5 transition-colors hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-600"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Courses
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Get the latest updates and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="h-9"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                size="icon"
                className="size-9 shrink-0 bg-indigo-600 hover:bg-indigo-700"
                aria-label="Subscribe"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.company.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
