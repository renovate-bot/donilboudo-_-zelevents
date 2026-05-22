import { siteConfig } from "./site-config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Hyacinthe",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.contact.serviceArea,
    },
    priceRange: "$$",
    image: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ],
  };
}
