import { getCSPNonce } from "@/hooks/useCSPNonce";
import Script from "next/script";

export async function OrganizationStructuredData() {
  const nonce = await getCSPNonce();
  //seo
  const baseUrl = "https://tartufo-gelato.cy";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: "Gelato di Tartufo",
    description:
      "Gelato di Tartufo is a Limassol gelateria serving hand-crafted Italian ice-cream. Spin our movie roulette, grab a scoop, and enjoy the coziest night.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/favcions/apple-touch-icon.png`,
      width: 120,
      height: 120,
    },
    telephone: "+357 94 334440",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+357 94 334440",
      availableLanguage: ["English"],
    },
    sameAs: ["https://www.instagram.com/tartufo_gelato/"],
    foundingDate: "2024",
    numberOfEmployees: "1-25",
    industry: "Food & Beverage",
    serviceArea: {
      "@type": "Place",
      name: "Cyprus",
    },
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      nonce={nonce}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
