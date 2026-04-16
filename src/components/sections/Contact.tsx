"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Address", value: CONTACT_INFO.address },
  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
  { icon: Mail, label: "Email", value: CONTACT_INFO.email },
  { icon: Clock, label: "Working Hours", value: CONTACT_INFO.hours },
];

const SOCIALS = [
  { icon: MessageSquare, label: "Twitter", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={fadeInLeft}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-11"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-11"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700 sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div variants={fadeInRight} className="space-y-8">
            <div className="space-y-6">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <detail.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Follow us
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border transition-colors hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-600"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-muted/50">
              <div className="flex h-48 items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 size-8 text-indigo-500/50" />
                  <p className="text-sm">Map Integration Placeholder</p>
                  <p className="text-xs text-muted-foreground">
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
