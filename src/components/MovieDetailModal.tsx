import { useMatch, useNavigate } from "react-router-dom";
import { makeBgPath, getMovie } from "../api";
import { XMarkIcon } from "../assets/XMarkIcon";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const Modal = styled(motion.div)`
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
`;

export const ModalImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: top;
  height: 60%;
  border-radius: 15px;
`;

export const ModalTitle = styled.h1`
  margin: 16px;
`;

export const ModalText = styled.p`
  margin: 16px;
  word-break: break-all;
`;

export const ModalCloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(256, 256, 256, 0.7);
  border: none;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieDetailModal = () => {
  const match = useMatch(":movieId");
  const navigate = useNavigate();
  const movieId = match?.params.movieId;
  const { data: movieDetail, isLoading: movieDetailLoading } = useQuery(
    ["movie", movieId],
    () => getMovie(movieId as string)
  );
  const onOverlayClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Overlay onClick={onOverlayClick} animate={{ opacity: 1 }} />
      <Modal layoutId={match?.params.movieId + ""}>
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
              Rating: {movieDetail.vote_average?.toFixed(1)}
            </ModalText>
            {movieDetail.homepage ? (
              <a href={movieDetail.homepage} target="_blank">
                <ModalText>Homepage: {movieDetail.homepage}</ModalText>
              </a>
            ) : null}
          </>
        )}
      </Modal>
    </>
  );
};

export default MovieDetailModal;
