"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandLogoIcon } from "@/components/ui/BrandLogoIcon";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS, NAVBAR_CTA, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 min-[400px]:px-4 sm:h-16 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex min-w-0 max-w-[65%] items-center gap-2 touch-manipulation sm:gap-2.5 sm:max-w-none"
          aria-label="Bosh sahifaga"
        >
          <BrandLogoIcon className="size-7 shrink-0 sm:size-8" />
          <span className="truncate text-left text-base font-bold tracking-tight text-foreground sm:text-xl">
            {SITE_NAME}
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-600",
                activeSection === link.href
                  ? "text-indigo-600"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            className="hidden touch-manipulation bg-indigo-600 hover:bg-indigo-700 sm:inline-flex sm:h-9 sm:px-4 sm:text-sm"
            onClick={() => scrollTo("#pricing")}
          >
            {NAVBAR_CTA}
          </Button>
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
