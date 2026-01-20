import { MenuPage } from "@/features/MenuPage/MenuPage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://tartufo-gelato.com";

  const title = "Menu | Gelato di Tartufo";
  const description =
    "Hand-crafted Italian gelato made fresh daily in Limassol. Classic and seasonal flavours, coffee and desserts — taste la dolce vita at Gelato di Tartufo.";
  const imageUrl = `${baseUrl}/preview.png`;

  return {
    title,
    description,
    keywords:
      "Gelato di Tartufo, gelato Limassol, Italian ice-cream Cyprus, artisanal gelato, dessert, coffee",
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Gelato di Tartufo",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Gelato di Tartufo preview image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: baseUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Menu() {
  return (
    <>
      <MenuPage />
      <OrganizationStructuredData />
    </>
  );
}
