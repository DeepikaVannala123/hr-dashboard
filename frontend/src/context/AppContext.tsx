import React, { createContext, useReducer, ReactNode } from 'react';

// Define the shape of the app's state
type AppState = {
  selectedCompany: string;
};

// Define the possible actions for the reducer
type AppAction = { type: 'SET_COMPANY'; payload: string };

// Initial state for the context
const initialState: AppState = {
  selectedCompany: 'zepto', // default company
};

// Create the context with default values
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null, // placeholder dispatch function
});

// Reducer function to handle state changes
const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_COMPANY':
      // Update the selected company in state
      return { ...state, selectedCompany: action.payload };
    default:
      // Return current state for unknown actions
      return state;
  }
};

// Context provider component to wrap the app
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };