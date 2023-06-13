import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getPopular, makeImagePath, IMovieDetail } from "../api";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(motion.img)`
  width: 200px;
  border-radius: 20px;
`;

const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};

export default function Popular() {
  const { isLoading, data } = useQuery(["movies", "popular"], getPopular);
  const movies = data?.results;

  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        movies.map((movie: IMovieDetail) => (
          <Img
            variants={ImgVariants}
            whileHover="hover"
            src={makeImagePath(movie.poster_path)}
            key={movie.id}
          />
        ))
      )}
    </div>
  );
}
