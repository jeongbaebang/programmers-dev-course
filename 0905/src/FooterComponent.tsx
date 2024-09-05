import { useContext } from 'react';
import { ColorContext } from './themeContext';

const FooterComponent = () => {
  const { color } = useContext(ColorContext);

  return (
    <div
      className="footer"
      style={{
        backgroundColor: color,
      }}
    >
      푸터
    </div>
  );
};

export default FooterComponent;
