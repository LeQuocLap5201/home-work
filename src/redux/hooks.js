import { useEffect, useState } from "react";
import store from "./store";

export const useDispatch = () => store.dispatch;

export const useSelector = (selector) => {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setState(selector(store.getState()))
    );

    return () => unsubscribe;
  }, [selector]);

  return state;
};
