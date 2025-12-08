import { Metadata } from "next";
import { movies } from "@/constants/movies";
import { notFound } from "next/navigation";
import RedirectHome from "../RedirectHome";

interface PosterPageProps {
  params: { id: string };
}

const baseUrl = "https://gelato-di-tartufoo.vercel.app";

export async function generateMetadata({
  params,
}: PosterPageProps): Promise<Metadata> {
  console.log("[poster] generateMetadata params:", params.id);
  const movie = movies.find((m) => m.id === Number(params.id));
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

export default function PosterPage({ params }: PosterPageProps) {
  const movie = movies.find((m) => m.id === Number(params.id));
  console.log("[poster] page render params:", params.id, "movie:", movie?.name);

  if (!movie) {
    notFound();
  }

  return <RedirectHome />;
}
