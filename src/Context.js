import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [state, setState] = useState("default value");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};