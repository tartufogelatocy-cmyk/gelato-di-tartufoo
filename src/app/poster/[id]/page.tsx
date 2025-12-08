import { Metadata } from "next";
import { movies } from "@/constants/movies";
import RedirectHome from "../RedirectHome";

export async function generateStaticParams() {
  return movies.map((m) => ({ id: m.id.toString() }));
}

interface PosterPageProps {
  params: Promise<{ id: string }>;
}

const baseUrl = "https://gelato-di-tartufoo.vercel.app";

export async function generateMetadata({
  params,
}: PosterPageProps): Promise<Metadata> {
  const { id } = await params;
  console.log("[poster] generateMetadata params:", id);
  const movie = movies.find((m) => m.id === Number(id));
  console.log("[poster] movie found:", movie?.name);

  if (!movie) {
    return {};
  }

  const absoluteImageUrl = `${baseUrl}${movie.path}`;
  const pageUrl = `${baseUrl}/poster/${movie.id}`;

  return {
    title: `${movie.name} – Movie Roulette | Gelato di Tartufo`,
    description:
      "Spin the roulette and enjoy your movie night with Gelato di Tartufo!",
    openGraph: {
      title: movie.name,
      description: "Movie recommendation from Gelato di Tartufo",
      type: "website",
      url: pageUrl,
      images: [
        {
          url: absoluteImageUrl,
          width: 800,
          height: 1200,
          alt: movie.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: movie.name,
      description: "Movie recommendation from Gelato di Tartufo",
      images: [absoluteImageUrl],
    },
    alternates: { canonical: pageUrl },
  };
}

export default function PosterPage() {
  return <RedirectHome />;
}
