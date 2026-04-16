"use client";

import { Send, MessageSquare, Globe, Camera, Video } from "lucide-react";
import { BrandLogoIcon } from "@/components/ui/BrandLogoIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SITE_NAME,
  SITE_TAGLINE,
  FOOTER_LINKS,
  FOOTER_UI,
} from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: MessageSquare, label: "Telegram", href: "#" },
  { icon: Globe, label: "Sayt", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-3 py-12 min-[400px]:px-4 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <BrandLogoIcon className="size-8" />
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
              {FOOTER_UI.aboutTitle}
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
              {FOOTER_UI.coursesTitle}
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
              {FOOTER_UI.newsletterTitle}
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              {FOOTER_UI.newsletterText}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex min-w-0 flex-col gap-2 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={FOOTER_UI.emailPlaceholder}
                className="h-10 min-h-10 w-full sm:h-9 sm:min-h-0"
                aria-label={FOOTER_UI.emailPlaceholder}
              />
              <Button
                type="submit"
                size="icon"
                className="size-9 shrink-0 bg-indigo-600 hover:bg-indigo-700"
                aria-label={FOOTER_UI.subscribeAria}
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. {FOOTER_UI.rights}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
