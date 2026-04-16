import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Courses } from "@/components/sections/Courses";
import { Teachers } from "@/components/sections/Teachers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { ExitLeadPopup } from "@/components/layout/ExitLeadPopup";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <ExitLeadPopup />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Teachers />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
