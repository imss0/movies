import { Loader, ImgContainer, Img, ImgVariants } from "../styles";
import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath, IMovieDetail } from "../api";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["movies", "upcoming"], getComingSoon);
  const movies = data?.results;

  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ImgContainer>
          {movies.map((movie: IMovieDetail) => (
            <Img
              variants={ImgVariants}
              whileHover="hover"
              src={makeImagePath(movie.poster_path)}
              key={movie.id}
            />
          ))}
        </ImgContainer>
      )}
    </div>
  );
}
