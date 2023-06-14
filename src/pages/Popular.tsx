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
import { getPopular, makeImagePath, IMovieDetail } from "../api";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["movies", "upcoming"], getPopular);
  const movies = data?.results;

  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Container variants={ContainerVariants} initial="start" animate="end">
          {movies.map((movie: IMovieDetail) => (
            <ImgContainer variants={ImgContainerVariants} key={movie.id}>
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
