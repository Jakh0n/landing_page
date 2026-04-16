"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, GraduationCap } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <GraduationCap className="size-6 text-indigo-600" />
            {SITE_NAME}
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium transition-colors hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
          <Button
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700"
            onClick={() => handleClick("#pricing")}
          >
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
