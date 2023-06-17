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

export const ContainerVariants = {
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
