import { Container, ContainerVariants, Loader } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getPopular, IMovieDetail } from "../api";
import { AnimatePresence } from "framer-motion";
import MovieList from "../components/MovieList";
import MovieDetailModal from "../components/MovieDetailModal";

export default function Upcoming() {
  const { isLoading, data } = useQuery(["popular"], getPopular);
  const movies = data?.results;
  const match = useMatch(":movieId");

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Container
            variants={ContainerVariants}
            initial="start"
            animate="end"
            exit="exit"
          >
            {movies.map((movie: IMovieDetail) => (
              <MovieList
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.original_title}
              />
            ))}
          </Container>
          <AnimatePresence>
            {match ? <MovieDetailModal /> : null}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
