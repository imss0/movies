import styled from "styled-components";

const NavContainer = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const NavText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavText>popular</NavText>
      <NavText>coming soon</NavText>
      <NavText>now playing</NavText>
    </NavContainer>
  );
}
