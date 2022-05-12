import { createContext, useContext, useMemo, useReducer } from "react";
import { ContextProps } from "../types/types";
import { initialState, AppReducer } from "./AppReducer";

const AppContext = createContext([null, null] as ContextProps);

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue: ContextProps = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
