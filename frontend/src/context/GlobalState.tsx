import React, { createContext, useReducer, ReactNode } from 'react';

type AppState = {
  selectedCompany: string;
};

type AppAction = { type: 'SET_COMPANY'; payload: string };

const initialState: AppState = {
  selectedCompany: 'zepto', // default company
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_COMPANY':
      return { ...state, selectedCompany: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
