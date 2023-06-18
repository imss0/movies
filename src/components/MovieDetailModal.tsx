import { useNavigate, useParams } from "react-router-dom";
import { makeBgPath, IMovieDetail } from "../api";
import { XMarkIcon } from "../assets/XMarkIcon";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import useFetchMovieDetail from "../hooks/useFetchMovieDetail";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const Modal = styled(motion.div)`
  position: fixed;
  width: 75vw;
  height: 90vh;
  border-radius: 15px;
  background-color: #222222;
  opacity: 1;
  top: 50%;
  left: 50%;
  margin-left: -37.5vw;
  margin-top: -45vh;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    height: 70vh;
    margin-top: -35vh;
  }

  @media only screen and (min-width: 768px) {
    width: 60vw;
    margin-left: -30vw;
  }
`;

const ModalImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: top;
  height: 60%;
  border-radius: 15px;
`;

const ModalTitle = styled.h1`
  margin: 16px;
`;

const ModalText = styled.p`
  margin: 16px;
  word-break: break-all;
`;

const ModalCloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(256, 256, 256, 0.7);
  border: none;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieDetailModal = () => {
  const navigate = useNavigate();
  const [movieDetail, movieDetailLoading] = useFetchMovieDetail();
  const onOverlayClick = () => {
    navigate(-1);
  };

  const { movieId } = useParams();

  return (
    <>
      <Overlay
        onClick={onOverlayClick}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      {/* <AnimatePresence onExitComplete={onOverlayClick}> */}
      <Modal
        layoutId={String(movieId)}
        exit={{ scale: 0 }}
        initial="hidden"
        animate="visible"
      >
        {movieDetailLoading ? (
          <Loader>Loading...</Loader>
        ) : (
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
              {movieDetail.budget > 0
                ? movieDetail.budget?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Not disclosed"}
            </ModalText>
            <ModalText>
              Revenue:
              {movieDetail.revenue > 0
                ? movieDetail.revenue?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Not disclosed"}
            </ModalText>
            <ModalText>Runtime: {movieDetail.runtime} minutes</ModalText>
            <ModalText>
              Rating:{" "}
              {movieDetail.vote_average > 0
                ? movieDetail.vote_average?.toFixed(1)
                : "Not disclosed"}
            </ModalText>
            {movieDetail.homepage ? (
              <a href={movieDetail.homepage} target="_blank">
                <ModalText>Homepage: {movieDetail.homepage}</ModalText>
              </a>
            ) : null}
          </>
        )}
      </Modal>
      {/* </AnimatePresence> */}
    </>
  );
};

export default MovieDetailModal;
