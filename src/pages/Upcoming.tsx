import {
  Loader,
  Container,
  Img,
  ImgTitle,
  ImgVariants,
  ImgContainer,
  ImgContainerVariants,
  ContainerVariants,
} from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath, IMovieDetail } from "../api";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["upcoming"], getComingSoon);
  const movies = data?.results;
  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Container variants={ContainerVariants} initial="start" animate="end">
          {movies.map((movie: IMovieDetail) => (
            <ImgContainer
              variants={ImgContainerVariants}
              key={movie.id}
              onClick={() => console.log("hi")}
            >
              <Img
                variants={ImgVariants}
                whileHover="hover"
                src={makeImagePath(movie.poster_path)}
              />
              <ImgTitle>{movie.title}</ImgTitle>
            </ImgContainer>
          ))}
        </Container>
      )}
    </div>
  );
}
