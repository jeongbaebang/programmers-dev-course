import { useContext, useEffect, useState } from 'react';
import { MyContext } from './context';
import { ColorContext, ThemeContext } from './themeContext';
import HomeComponent from './HomeComponent';
import { motion } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [color, setColor] = useState('#000000');

  const toggleHandler = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const value = window.prompt('원하는 색상을 입력해주세요');

    setColor(value ?? '#000000');
  }, []);

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, setDarkMode: toggleHandler }}
    >
      <motion.button
        onClick={toggleHandler}
        style={{
          backgroundColor: darkMode ? 'blue' : 'red',
          color: darkMode ? 'white' : 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        테마 변경
      </motion.button>
      <motion.button
        onClick={() => {
          const value = window.prompt('원하는 색상을 입력해주세요');

          setColor(value ?? '#000000');
        }}
        style={{
          backgroundColor: darkMode ? 'blue' : 'red',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        배경 변경
      </motion.button>
      <ColorContext.Provider value={{ color: color }}>
        <HomeComponent />
      </ColorContext.Provider>
      <MyContext.Provider value={{ age: 100, name: '00' }}>
        <GrandParent />
      </MyContext.Provider>
    </ThemeContext.Provider>
  );
};

const GrandParent = () => {
  return <Parent />;
};

const Parent = () => {
  return <Child />;
};

const Child = () => {
  return <Message />;
};

const Message = () => {
  const value = useContext(MyContext);
  return <div>전달받은 데이터: {value.name ?? '12'}</div>;
};

export default App;
