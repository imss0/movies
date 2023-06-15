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
import { useNavigate } from "react-router-dom";
import { getPopular, makeImagePath, IMovieDetail } from "../api";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["movies", "upcoming"], getPopular);
  const movies = data?.results;
  const navigate = useNavigate();

  const onBoxClicked = (movieId: number) => {
    navigate(`/${movieId}`);
  };
  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Container
          variants={ContainerVariants}
          initial="start"
          animate="end"
          exit="exit"
        >
          {movies.map((movie: IMovieDetail) => (
            <ImgContainer
              variants={ImgContainerVariants}
              key={movie.id}
              onClick={onBoxClicked}
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
