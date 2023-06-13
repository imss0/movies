import { Loader, Img, ImgVariants } from "../styles";
import { useQuery } from "@tanstack/react-query";
import { getPopular, makeImagePath, IMovieDetail } from "../api";

export default function Popular() {
  const { isLoading, data } = useQuery(["movies", "popular"], getPopular);
  const movies = data?.results;

  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        movies.map((movie: IMovieDetail) => (
          <Img
            variants={ImgVariants}
            whileHover="hover"
            src={makeImagePath(movie.poster_path)}
            key={movie.id}
          />
        ))
      )}
    </div>
  );
}
