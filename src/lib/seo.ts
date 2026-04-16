import { CONTACT_INFO, FAQ_ITEMS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

/**
 * Sayt URL (metadata, og:image, canonical, schema).
 * 1) NEXT_PUBLIC_SITE_URL — prod domen (ustun)
 * 2) VERCEL_URL — Vercel deploy (masalan ezyly.vercel.app), og:rasm to‘g‘ri ishlashi uchun muhim
 * 3) fallback
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host.replace(/\/$/, "")}`;
  }

  return "https://ezyly.uz";
}

export const SEO_DEFAULT_TITLE = `${SITE_NAME} — IELTS va ingliz tili markazi`;

export const SEO_DESCRIPTION =
  "IELTS General & Academic, Speaking, Writing, TOEFL. Mock testlar, mentor feedback, band maqsad. Toshkent va onlayn — Ezyly bilan aniq yo‘l.";

export const SEO_KEYWORDS = [
  "Ezyly",
  "IELTS",
  "IELTS General",
  "IELTS Academic",
  "IELTS kursi",
  "ingliz tili kursi",
  "TOEFL",
  "Speaking",
  "Writing",
  "mock test",
  "Toshkent",
  "onlayn ingliz tili",
  "band 7",
] as const;

export function getOrganizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: "Toshkent",
      addressCountry: "UZ",
    },
    sameAs: [] as string[],
  };
}

export function getWebSiteJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SEO_DESCRIPTION,
    url,
    inLanguage: "uz",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url,
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
