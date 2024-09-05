import { useContext } from 'react';
import { ColorContext } from './themeContext';

const MainComponent = () => {
  const { color } = useContext(ColorContext);

  return (
    <div
      className="main"
      style={{
        backgroundColor: color,
      }}
    >
      메인
    </div>
  );
};

export default MainComponent;
