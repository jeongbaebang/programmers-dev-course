import { useContext } from 'react';
import { ColorContext, ThemeContext } from './themeContext';

const HeaderComponent = () => {
  const { darkMode } = useContext(ThemeContext);
  const { color } = useContext(ColorContext);

  return (
    <div
      className="header"
      style={{
        backgroundColor: color,
        color: darkMode ? 'white' : 'black',
      }}
    >
      헤더
    </div>
  );
};

export default HeaderComponent;
