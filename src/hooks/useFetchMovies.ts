import { useQuery } from "@tanstack/react-query";
import { getPopular, getComingSoon, getNowPlaying } from "../api";

interface IUseFetchMovies {
  page: string;
}

export function useFetchMovies({ page }: IUseFetchMovies) {
  return useQuery([`${page}`], () => {
    if (page === "popular") {
      return getPopular();
    } else if (page === "upcoming") {
      return getComingSoon();
    } else if (page === "playing") {
      return getNowPlaying();
    }
  });
}
