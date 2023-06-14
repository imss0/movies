import styled from "styled-components";
import { motion } from "framer-motion";

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(motion.div)`
  display: grid;
  place-items: center;
  gap: 50px 15px;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 70px;
`;

export const ImgContainer = styled(motion.div)`
  width: 165px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled(motion.img)`
  width: 165px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
`;

export const ImgTitle = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
`;

export const ContainerVariants = {
  start: {},
  end: {
    transition: {
      type: "spring",
      durtaion: 0.5,
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

export const ImgContainerVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
  },
};

export const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};
