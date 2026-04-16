import {
  getFaqJsonLd,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

export function HomeJsonLd() {
  const org = getOrganizationJsonLd();
  const site = getWebSiteJsonLd();
  const faq = getFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
