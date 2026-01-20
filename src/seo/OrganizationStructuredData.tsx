import { getCSPNonce } from "@/hooks/useCSPNonce";
import Script from "next/script";

export async function OrganizationStructuredData() {
  const nonce = await getCSPNonce();

  const baseUrl = "https://tartufo-gelato.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: "Gelato di Tartufo",
    description:
      "Hand-crafted Italian gelato made fresh daily in Limassol. Classic and seasonal flavours, coffee and desserts — taste la dolce vita at Gelato di Tartufo.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/favcions/apple-touch-icon.png`,
      width: 120,
      height: 120,
    },
    telephone: "+35794334440",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+35794334440",
      email: "tartufo.gelato.cy@gmail.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.instagram.com/tartufo_gelato?igsh=MXV1OHpydDRxeXd3ZQ==",
      "https://www.facebook.com/share/1AY9TLBWtb/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/h11Wo5BmNNyoMnCk8?g_st=ic",
    ],
    foundingDate: "2025",
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
