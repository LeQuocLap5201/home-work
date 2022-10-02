const createStore = (reducer, preState) => {
  let state = preState;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());

    return action;
  };

  dispatch({
    type: "",
  });

  return { getState, subscribe, dispatch };
};

export default createStore;
