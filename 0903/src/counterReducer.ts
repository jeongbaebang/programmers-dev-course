export type State = {
  [key in string]: {
    count: number;
  };
};

const counterReducer = (
  state: State,
  action: { type: 'updateCount'; payload: string }
) => {
  const actionMap = {
    updateCount: () => {
      return {
        ...state,
        [action.payload]: {
          count: state[action.payload].count + 1,
        },
      };
    },
  };

  const handler = actionMap[action.type];

  return handler ? handler() : state;
};

export { counterReducer };
