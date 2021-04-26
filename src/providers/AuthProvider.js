import React, { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import isTokenExpired from "../pages/api/isTockenExpired";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    // userDate: {},
  });

  useEffect(() => {
    if (isTokenExpired()) {
      setState((prev) => ({ ...prev, isAuthenticated: true }));
    }
  }, [setState]);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthProviderState = () => {
  const { state } = useContext(AuthContext);

  if (typeof state === "undefined") {
    throw Error("useAuthProviderState must be used in AuthContext");
  }

  return state;
};

const useAuthDispatch = () => {
  const { setState } = useContext(AuthContext);

  const login = () => {
    setState({ isAuthenticated: true });
  };
};

export default AuthProvider;
