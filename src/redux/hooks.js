import { useEffect, useState } from "react";
import store from "./store";

export const useDispatch = () => store.dispatch;

export const useSelector = (selector) => {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      setState(newState);
    });

    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
