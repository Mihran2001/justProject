import React, { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import isTokenExist from "../pages/api/isTockenExist";
import { loginAxios, tokenAxios } from "../pages/api/api";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    // userDate: {},
  });

  useEffect(() => {
    if (isTokenExist()) {
      setState((prev) => ({ ...prev, isAuthenticated: true }));
    }
  }, [setState]);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProviderState = () => {
  const { state } = useContext(AuthContext);

  if (typeof state === "undefined") {
    throw Error("useAuthProviderState must be used in AuthContext");
  }

  function isAuth() {
    return state.isAuthenticated;
  }
  return { isAuth };
};

export const useAuthDispatch = () => {
  const { setState } = useContext(AuthContext);

  const login = async (values) => {
    const data = await loginAxios(values);
    console.log(data);
    if (data.message === "logined successfuly") {
      localStorage.setItem("access_token", data.token);
      tokenAxios();
      setState({ isAuthenticated: true });
      return true;
    }
  };

  return { login };
};

export default AuthProvider;
