import styled from "styled-components";
import { motion } from "framer-motion";

interface ImgContainerProps {
  variants: any;
  key: number;
  onClick: any;
}

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

export const ImgContainer = styled(motion.div)<ImgContainerProps>`
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
  height: 80vh;
  border-radius: 15px;
  background-color: #222222;
  opacity: 1;
  top: 50%;
  left: 50%;
  margin-left: -37.5vw;
  margin-top: -40vh;
`;

export const ModalImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: top;
  height: 60%;
  border-radius: 15px;
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

export const ImgContainerVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    delay: 0.5,
  },
};

export const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};
