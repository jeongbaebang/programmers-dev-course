import styled from 'styled-components';
import Button1 from './components/Button1';
import Button2 from './components/Button2';

function App() {
  return (
    <Container $main>
      <Button1 />
      <Button2 />
    </Container>
  );
}

interface ContainerProps {
  readonly $main?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  width: 1024px;
  background: black;
  color: ${(props) => (props.$main ? ' white' : 'black')};
  border: ${(props) => (props.$main ? '1px solid yellow' : 'none')};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
