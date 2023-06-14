import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Indicator = styled(motion.span)`
  width: 8px;
  height: 8px;
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
