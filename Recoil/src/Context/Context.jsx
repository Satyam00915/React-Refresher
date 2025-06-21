import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    

    

  return (
    <CounterContext.Provider value={{ count: count, setCount: setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
