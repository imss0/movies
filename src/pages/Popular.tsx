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
} from "./styles";
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
  console.log(movieDetail);
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
                  <ModalImage
                    style={{
                      backgroundImage: `linear-gradient(transparent,#222222), url(${makeBgPath(
                        movieDetail.backdrop_path
                      )})`,
                    }}
                  />
                  <h2>{movieDetail.title}</h2>
                  <p>{movieDetail.overview}</p>
                  <p>budget:${movieDetail.budget}</p>
                  <p>Revenue:${movieDetail.revenue}</p>
                  <p>Runtime: {movieDetail.runtime} minutes</p>
                  <p>Rating: {movieDetail.vote_average}</p>
                  <a href={movieDetail.homepage} target="_blank">
                    Homepage:{movieDetail.homepage}
                  </a>
                </>
              )}
            </Modal>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
