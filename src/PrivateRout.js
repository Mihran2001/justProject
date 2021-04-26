import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    // debugger
    const {
      state: { isAuthenticated },
    } = useContext(AuthContext);
    return (
      <Route
        render={() =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
              }}
            />
          )
        }
      />
    );
  };

export default PrivateRoute