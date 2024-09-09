import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Container>
      <Logo to={'/'}>INTERSTELLAR</Logo>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 10px;
`;

const Logo = styled(NavLink)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Handjet', sans-serif;
`;

export default Menu;
