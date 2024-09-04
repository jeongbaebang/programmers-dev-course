import { useReducer } from 'react';
import { counterReducer, State } from './counterReducer';
import Form from './Form';

const initState: State = {
  a: {
    count: 0,
  },
  b: {
    count: 0,
  },
  c: {
    count: 0,
  },
};

const App = () => {
  const ids = ['a', 'b', 'c'];

  const [state, dispatch] = useReducer(counterReducer, initState);

  const onClickHandler = (userName: string) => () => {
    dispatch({ type: 'updateCount', payload: userName });
  };

  return (
    <div>
      <Form />
      {/* {ids.map((id) => {
        return (
          <Item state={state[id].count} onClick={onClickHandler(id)} key={id} />
        );
      })} */}
    </div>
  );
};

const Item = ({ onClick, state }: { onClick: () => void; state: number }) => {
  return (
    <div style={{ display: 'flex', gap: 30, marginBottom: 10 }}>
      <button onClick={onClick}>USER</button>
      {/* 상태 */}
      <div
        style={{
          height: 50,
          width: state,
          backgroundColor: 'powderblue',
        }}
      ></div>
    </div>
  );
};

export default App;
