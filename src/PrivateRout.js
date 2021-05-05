import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  // debugger
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <Route
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
