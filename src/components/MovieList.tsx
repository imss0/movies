import { makeImagePath } from "../api";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImgContainer = styled(motion.div)`
  width: 165px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Img = styled(motion.img)`
  width: 165px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
`;

const ImgTitle = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
`;

const ImgContainerVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    delay: 0.5,
  },
};

const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};

interface MovieListProps {
  id: number;
  poster_path: string;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ id, poster_path, title }) => {
  const navigate = useNavigate();
  const onBoxClicked = (movieId: number) => {
    navigate(`${movieId}`);
  };

  return (
    <ImgContainer
      variants={ImgContainerVariants}
      key={id}
      layoutId={id + ""}
      onClick={() => onBoxClicked(id)}
    >
      <Img
        variants={ImgVariants}
        whileHover="hover"
        src={makeImagePath(poster_path)}
      />
      <ImgTitle>{title}</ImgTitle>
    </ImgContainer>
  );
};

export default MovieList;
