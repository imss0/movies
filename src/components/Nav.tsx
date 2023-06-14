import { Link, useMatch } from "react-router-dom";
import { NavContainer, NavText, Indicator } from './nav.styles'

export default function Nav() {
  const homeMatch = useMatch("/");
  const upcomingMatch = useMatch("coming-soon");
  const nowplayingMatch = useMatch("now-playing");
  return (
    <NavContainer>
      <NavText>
        <Link to="/">
          popular
          {homeMatch && <Indicator layoutId="indicator" />}
        </Link>
      </NavText>
      <NavText>
        <Link to="/coming-soon">
          coming soon
          {upcomingMatch && <Indicator layoutId="indicator" />}
        </Link>
      </NavText>
      <NavText>
        <Link to="/now-playing">
          now playing
          {nowplayingMatch && <Indicator layoutId="indicator" />}
        </Link>
      </NavText>
    </NavContainer>
  );
}
