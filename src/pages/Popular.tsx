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
  ModalImage,
  ModalTitle,
  ModalText,
  ModalCloseButton,
} from "./styles";
import { XMarkIcon } from "../assets/XMarkIcon";
import { useQuery } from "@tanstack/react-query";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { getPopular, makeImagePath, IMovieDetail, makeBgPath } from "../api";
import { AnimatePresence } from "framer-motion";
import useMovieDetail from "../hooks/useMovieDetail";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["popular"], getPopular);
  const movies = data?.results;
  const navigate = useNavigate();
  const match = useMatch(":movieId");
  const movieDetail = useMovieDetail(match?.params.movieId + "");

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
            <Modal layoutId={match.params.movieId + ""}>
              {movieDetail && (
                <>
                  <ModalCloseButton onClick={onOverlayClick}>
                    <XMarkIcon />
                  </ModalCloseButton>
                  <ModalImage
                    style={{
                      backgroundImage: `linear-gradient(transparent,#222222), url(${makeBgPath(
                        movieDetail.backdrop_path
                      )})`,
                    }}
                  />
                  <ModalTitle>{movieDetail.title}</ModalTitle>
                  <ModalText>{movieDetail.overview}</ModalText>
                  <ModalText>
                    Budget:
                    {movieDetail.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </ModalText>
                  <ModalText>
                    Revenue:
                    {movieDetail.revenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </ModalText>
                  <ModalText>Runtime: {movieDetail.runtime} minutes</ModalText>
                  <ModalText>
                    Rating: {movieDetail.vote_average.toFixed(1)}
                  </ModalText>
                  {movieDetail.homepage ? (
                    <a href={movieDetail.homepage} target="_blank">
                      <ModalText>Homepage:{movieDetail.homepage}</ModalText>
                    </a>
                  ) : null}
                </>
              )}
            </Modal>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
