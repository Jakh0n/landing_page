import { CONTACT_INFO, FAQ_ITEMS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

/** Ishlab chiqarishda NEXT_PUBLIC_SITE_URL ni o‘rnatish tavsiya etiladi (masalan https://ezyly.uz) */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ezyly.uz";
  return raw.replace(/\/$/, "");
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
