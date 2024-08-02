import React, { createContext, useState } from 'react';

export const recipieContext = createContext();

export const RecipieContextProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);

  return (
    <recipieContext.Provider value={{ dishes, setDishes }}>
      {children}
    </recipieContext.Provider>
  );
};
