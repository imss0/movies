import { useMatch } from "react-router-dom";
import { getMovie } from "../api";
import { useQuery } from "@tanstack/react-query";

const usePlayingMovies = (prop: string) => {
  let detailMatch;
  if (prop === "popular") {
    detailMatch = useMatch(":movieId");
  } else if (prop === "upcoming") {
    detailMatch = useMatch("/coming-soon/:movieId");
  } else if (prop === "playing") {
    detailMatch = useMatch("/now-playing/:movieId");
  }

  const movieId = detailMatch?.params.movieId as string;
  const { data, isLoading } = useQuery(["detail", movieId], () =>
    getMovie(movieId)
  );
  return [data, isLoading];
};

export default usePlayingMovies;
