import React, { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import isTokenExist from "../pages/Api/isTockenExist";
import { loginAxios, tokenAxios } from "../pages/Api";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: isTokenExist(),
    // userDate: {},
  });

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

  console.log("in login page", state.isAuthenticated);
  return { isAuth: state.isAuthenticated };
};

export const useAuthDispatch = () => {
  const { setState } = useContext(AuthContext);

  const login = async (values) => {
    const data = await loginAxios(values);
    console.log(data);
    if (data.message === "logined successfuly") {
      if (values.remember) localStorage.setItem("access_token", data.token);
      else {
        sessionStorage.setItem("access_token", data.token);
      }
      tokenAxios();
      setState({ isAuthenticated: true });
      return true;
    }
  };

  return { login };
};

export default AuthProvider;
