import styled from "styled-components";
import { IMovieDetail } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";
import MovieList from "../components/MovieList";
import MovieDetailModal from "../components/MovieDetailModal";

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
  page: string;
}

export default function MovieListLayout({ page }: IMovieListLayoutProps) {
  const param = useParams();
  const { data, isLoading } = useFetchMovies({ page });
  const movies = data?.results;

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <AnimatePresence>
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
          </AnimatePresence>
          <AnimatePresence>
            {param.movieId ? <MovieDetailModal /> : null}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
