// AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Step 1: Create a Context
const AppContext = createContext();

// Step 2: Define a Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAME':
      return { ...state, selectedGame: action.payload };
    default:
      return state;
  }
};

// Step 3: Provide the Context
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedGame: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Step 4: Use the Context
export const useAppContext = () => useContext(AppContext);
