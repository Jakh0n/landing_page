import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "EduPrime Academy — Master New Skills Online",
  description:
    "Join over 10,000 students worldwide. Access 200+ expert-led courses, earn recognized certificates, and transform your career with hands-on learning.",
  keywords: [
    "online learning",
    "courses",
    "education",
    "programming",
    "design",
    "certificates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, jakarta.variable, "antialiased")}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
