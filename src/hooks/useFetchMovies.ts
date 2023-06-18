import { useQuery } from "@tanstack/react-query";
import { getPopular, getComingSoon, getNowPlaying } from "../api";
import { IMovieDetail } from "../api";

interface IUseFetchMovies {
  prop: string;
}

export function useFetchMovies({ prop }: IUseFetchMovies) {
  return useQuery([`${prop}`], () => {
    if (prop === "popular") {
      return getPopular();
    } else if (prop === "upcoming") {
      return getComingSoon();
    } else if (prop === "playing") {
      return getNowPlaying();
    }
  });
}
