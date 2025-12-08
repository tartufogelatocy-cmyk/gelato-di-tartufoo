import { Movie } from "@/types/movies";

export const UseGetRandomMovieHook = (movies: Movie[]) => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return randomMovie;
};
