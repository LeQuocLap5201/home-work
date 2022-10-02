import React, { createContext } from "react";

const MyContext = createContext();

function MyProvider({ children, store }) {
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext };
