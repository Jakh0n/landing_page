"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING_PLANS } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing Plans"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your needs. Upgrade or downgrade at any time."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <span
            className={cn(
              "text-sm font-medium",
              !isYearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              isYearly ? "bg-indigo-600" : "bg-muted-foreground/30"
            )}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly pricing"
          >
            <span
              className={cn(
                "absolute top-0.5 size-6 rounded-full bg-white shadow-sm transition-transform",
                isYearly ? "translate-x-5.5" : "translate-x-0.5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              isYearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
              Save 20%
            </span>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-8 lg:grid-cols-3"
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
                  "relative flex flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-indigo-500 bg-gradient-to-b from-indigo-500/5 to-violet-500/5 shadow-xl ring-1 ring-indigo-500/20"
                    : "bg-card shadow-sm"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${price}</span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
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
                    "w-full",
                    plan.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : ""
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
