"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { BrandLogoIcon } from "@/components/ui/BrandLogoIcon";
import { NAV_LINKS, NAVBAR_CTA, SITE_NAME } from "@/lib/constants";
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
        <Button
          variant="ghost"
          size="icon"
          className="size-10 touch-manipulation lg:hidden"
          aria-label="Menyu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(100vw-1rem,20rem)] pb-[max(1rem,env(safe-area-inset-bottom))] pt-[env(safe-area-inset-top)] sm:w-80"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <BrandLogoIcon className="size-6" />
            {SITE_NAME}
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="min-h-12 touch-manipulation rounded-lg px-4 py-3 text-left text-base font-medium transition-colors hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
          <Button
            className="mt-4 h-12 min-h-12 w-full touch-manipulation bg-indigo-600 hover:bg-indigo-700"
            onClick={() => handleClick("#pricing")}
          >
            {NAVBAR_CTA}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
