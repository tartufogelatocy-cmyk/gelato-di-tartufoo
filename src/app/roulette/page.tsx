import { WelcomeScreen } from "@/features/WelcomeScreen/WelcomeScreen";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://tartufo-gelato.com";

  const title =
    "Gelato di Tartufo – Movie Night Roulette & Gelateria in Limassol";
  const description =
    "Spin the movie roulette, grab your Gelato di Tartufo, and enjoy the coziest night in Limassol. Hand-crafted Italian gelato meets curated film recommendations for a perfect evening.";
  const imageUrl = `${baseUrl}/preview.png`;

  return {
    title,
    description,
    keywords:
      "Gelato di Tartufo, gelato Limassol, Italian ice-cream Cyprus, movie roulette, dessert and movie night",
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

export default function Roulette() {
  return (
    <>
      <WelcomeScreen />
      <OrganizationStructuredData />
    </>
  );
}
