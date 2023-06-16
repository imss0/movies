import {
  Loader,
  Container,
  Img,
  ImgTitle,
  Modal,
  ImgVariants,
  ImgContainer,
  ImgContainerVariants,
  ContainerVariants,
  Overlay,
} from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useMatch, useNavigate } from "react-router-dom";
import { getPopular, makeImagePath, IMovieDetail } from "../api";
import { AnimatePresence } from "framer-motion";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["movies", "upcoming"], getPopular);
  const movies = data?.results;
  const navigate = useNavigate();
  const match = useMatch(":movieId");
  const onBoxClicked = (movieId: number) => {
    navigate(`/${movieId}`);
  };
  const onOverlayClick = () => {
    navigate(-1);
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
              layoutId={movie.id + ""}
              onClick={() => onBoxClicked(movie.id)}
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
      <AnimatePresence>
        {match ? (
          <>
            <Overlay onClick={onOverlayClick} animate={{ opacity: 1 }} />
            <Modal layoutId={match.params.movieId + ""} />
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
