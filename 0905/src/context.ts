import { createContext } from 'react';

type State = {
  age: number;
  name: string;
};

const initialState: State = {
  age: 100,
  name: '00',
};

export const MyContext = createContext<State>(initialState);
