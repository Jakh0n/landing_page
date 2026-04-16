"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS, SECTION_COPY } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export function FAQ() {
  const { badge, title, subtitle } = SECTION_COPY.faq;
  return (
    <section id="faq" className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border bg-card px-4 shadow-sm sm:px-6"
              >
                <AccordionTrigger className="touch-manipulation py-4 text-left text-sm font-semibold hover:no-underline sm:py-5 sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
