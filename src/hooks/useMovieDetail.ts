import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../api";

const useMovieDetail = (movieId: string) => {
  const { data } = useQuery(["movie", movieId], () => getMovie(movieId));
  return data;
};

export default useMovieDetail;
