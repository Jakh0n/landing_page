"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING_PLANS, PRICING_UI, SECTION_COPY } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const { badge, title, subtitle } = SECTION_COPY.pricing;

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mb-12 sm:gap-x-4"
        >
          <span
            className={cn(
              "shrink-0 text-sm font-medium",
              !isYearly ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {PRICING_UI.monthly}
          </span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "inline-flex h-9 w-14 shrink-0 touch-manipulation items-center rounded-full p-0.5 transition-colors sm:h-7 sm:w-12",
              isYearly ? "bg-indigo-600" : "bg-muted-foreground/30",
            )}
            role="switch"
            aria-checked={isYearly}
            aria-label="Yillik yoki oylik tarif"
          >
            <span
              className={cn(
                "size-7 rounded-full bg-white shadow-sm ring-0 transition-[margin] duration-200 ease-out sm:size-6",
                isYearly ? "ml-auto" : "mr-auto",
              )}
            />
          </button>
          <span
            className={cn(
              "shrink-0 text-sm font-medium",
              isYearly ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {PRICING_UI.yearly}
          </span>
          {isYearly && (
            <span className="shrink-0 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
              {PRICING_UI.saveBadge}
            </span>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-5 sm:p-8",
                  plan.highlighted
                    ? "border-indigo-500 bg-gradient-to-b from-indigo-500/5 to-violet-500/5 shadow-xl ring-1 ring-indigo-500/20"
                    : "bg-card shadow-sm",
                )}
              >
                <div className="mb-4 flex min-h-9 items-center justify-center">
                  {plan.highlighted ? (
                    <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
                      {PRICING_UI.badgePopular}
                    </span>
                  ) : null}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${price}</span>
                  <span className="text-muted-foreground">
                    /{isYearly ? PRICING_UI.perYear : PRICING_UI.perMonth}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={cn(
                    "h-12 min-h-12 w-full touch-manipulation",
                    plan.highlighted ? "bg-indigo-600 hover:bg-indigo-700" : "",
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
