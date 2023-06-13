import styled from "styled-components";
import { motion } from "framer-motion";

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 60px;
`;

export const Img = styled(motion.img)`
  width: 165px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};
