import { createContext } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const ColorContext = createContext({
  color: '#000000',
});
