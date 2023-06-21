import { Link, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const NavText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Indicator = styled(motion.span)`
  width: 6px;
  height: 6px;
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export default function Nav() {
  const homeMatch = useMatch("/");
  const homeDetailMatch = useMatch("/:movieId");
  const upcomingMatch = useMatch("coming-soon");
  const upcomingDetailMatch = useMatch("/coming-soon/:movieId");
  const nowplayingMatch = useMatch("now-playing");
  const nowPlayingDetailMatch = useMatch("/now-playing/:movieId");
  const detail = useParams().movieId;

  return (
    <NavContainer>
      <NavText>
        <Link to="/">
          popular
          {(homeMatch || (homeDetailMatch && detail)) && (
            <Indicator layoutId="indicator" />
          )}
        </Link>
      </NavText>
      <NavText>
        <Link to="/coming-soon">
          coming soon
          {(upcomingMatch || (upcomingDetailMatch && detail)) && (
            <Indicator layoutId="indicator" />
          )}
        </Link>
      </NavText>
      <NavText>
        <Link to="/now-playing">
          now playing
          {(nowplayingMatch || (nowPlayingDetailMatch && detail)) && (
            <Indicator layoutId="indicator" />
          )}
        </Link>
      </NavText>
    </NavContainer>
  );
}
