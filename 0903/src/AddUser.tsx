import React, { useReducer } from 'react';
import styles from './Form.module.scss';

type Type = 'name' | 'age' | 'address' | '_id';

export type UserState = {
  _id: number;
  name: string;
  age: number;
  address: string;
};

type Action =
  | { type: 'update'; payload: { [x: string]: string | number } }
  | { type: 'reset' };

const initialState = { _id: 0, name: '', age: 0, address: '' };
const formReducer = (state: UserState, action: Action) => {
  const actionMap: Record<Action['type'], () => UserState> = {
    update() {
      if (action.type === 'update') {
        return { ...state, ...action.payload };
      }

      return initialState;
    },

    reset() {
      return { ...initialState, _id: state._id + 1 };
    },
  };

  const handler = actionMap[action.type];

  return handler ? handler() : state;
};

const AddUser: React.FC<{ onSubmit: (payload: UserState) => void }> =
  React.memo(({ onSubmit }) => {
    const [state, dispatch] = useReducer(formReducer, {
      _id: 0,
      name: '',
      age: 0,
      address: '',
    });

    const updateValueHandler = (type: Type) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (type === 'age') {
          dispatch({
            type: 'update',
            payload: { [type]: parseInt(value) },
          });

          return;
        }

        dispatch({
          type: 'update',
          payload: { [type]: value },
        });
      };
    };

    const onClickHandler = () => {
      if (state.address === '' || state.age === 0 || state.name === '') return;

      onSubmit({ ...state, _id: state._id });
      dispatch({ type: 'reset' });
    };

    return (
      <div>
        <div className={styles.formInputContainer}>
          <div className={styles.formInput}>
            이름:
            <input
              type="text"
              value={state.name}
              onChange={updateValueHandler('name')}
            />
          </div>
          <div className={styles.formInput}>
            나이:
            <input
              type="number"
              value={state.age}
              onChange={updateValueHandler('age')}
            />
          </div>
          <div className={styles.formInput}>
            지역:
            <input
              type="text"
              value={state.address}
              onChange={updateValueHandler('address')}
            />
          </div>
        </div>
        <div className={styles.formButtonContainer}>
          <button onClick={onClickHandler}>추가</button>
        </div>
      </div>
    );
  });

export default AddUser;
