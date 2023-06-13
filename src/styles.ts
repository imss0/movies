import styled from "styled-components";
import { motion } from "framer-motion";

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled(motion.img)`
  width: 200px;
  border-radius: 20px;
  cursor: pointer;
`;

export const ImgVariants = {
  hover: { scale: 1.2, y: -30 },
};
