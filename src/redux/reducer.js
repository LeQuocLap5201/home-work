const initState = { count1: 1, count2: 2 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "COUNT1":
      return { ...state, count1: state.count1 + 1 };
    case "COUNT2":
      return { ...state, count2: state.count2 + 1 };

    default:
      return state;
  }
};

export default reducer;
