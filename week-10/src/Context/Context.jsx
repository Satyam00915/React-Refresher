import { createContext, useState } from "react";

export const BulbContext = createContext();

export const BulbProvider = ({ children }) => {
  const [bulbOn, setBulb] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn: bulbOn, setBulb: setBulb }}>
      {children}
    </BulbContext.Provider>
  );
};
