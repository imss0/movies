import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMatch } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieDetailModal from "../components/MovieDetailModal";
import { IMovieDetail } from "../api";
import { useFetchMovies } from "../hooks/useFetchMovies";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  display: grid;
  place-items: center;
  gap: 50px 15px;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 70px;
`;

const ContainerVariants = {
  start: {},
  end: {
    transition: {
      type: "spring",
      durtaion: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface IMovieListLayoutProps {
  prop: string;
}

export default function MovieListLayout({ prop }: IMovieListLayoutProps) {
  let detailMatch;
  if (prop === "popular") {
    detailMatch = useMatch(":movieId");
  } else if (prop === "upcoming") {
    detailMatch = useMatch("/coming-soon/:movieId");
  } else if (prop === "playing") {
    detailMatch = useMatch("/now-playing/:movieId");
  }
  const { data, isLoading } = useFetchMovies({ prop });
  const movies = data?.results;

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
            {detailMatch ? <MovieDetailModal prop={prop} /> : null}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
