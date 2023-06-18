import { useParams } from "react-router-dom";
import { getMovie } from "../api";
import { useQuery } from "@tanstack/react-query";

const useFetchMovieDetail = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery(["detail", movieId], () =>
    getMovie(movieId as string)
  );
  return [data, isLoading];
};

export default useFetchMovieDetail;
