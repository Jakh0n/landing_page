"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EXIT_LEAD_POPUP } from "@/lib/constants";

const STORAGE_KEY = "ezyly-exit-lead-shown";

export function ExitLeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const maybeOpen = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget != null) return;
      if (e.clientY > 48) return;
      maybeOpen();
    };

    document.documentElement.addEventListener("mouseout", onMouseOut);
    return () =>
      document.documentElement.removeEventListener("mouseout", onMouseOut);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="bottom"
        className="mx-auto max-h-[90vh] max-w-lg rounded-t-2xl pb-[max(1rem,env(safe-area-inset-bottom))]"
        aria-describedby="exit-lead-desc"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="text-lg sm:text-xl">
            {EXIT_LEAD_POPUP.title}
          </SheetTitle>
          <SheetDescription id="exit-lead-desc" className="text-left">
            {EXIT_LEAD_POPUP.description}
          </SheetDescription>
        </SheetHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-4 pb-1 sm:pb-2"
        >
          <div>
            <label htmlFor="exit-lead-contact" className="sr-only">
              {EXIT_LEAD_POPUP.emailLabel}
            </label>
            <Input
              id="exit-lead-contact"
              name="contact"
              required
              placeholder={EXIT_LEAD_POPUP.emailPlaceholder}
              className="h-11"
              autoComplete="email"
            />
          </div>
          <p className="text-xs text-muted-foreground">{EXIT_LEAD_POPUP.hint}</p>
          <SheetFooter className="flex-col gap-2 p-0 sm:flex-row sm:justify-start">
            <Button
              type="submit"
              className="h-11 w-full touch-manipulation bg-indigo-600 hover:bg-indigo-700 sm:h-10 sm:w-auto"
            >
              {EXIT_LEAD_POPUP.submit}
            </Button>
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              {EXIT_LEAD_POPUP.close}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
