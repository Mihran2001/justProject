import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "./providers/AuthProvider";

export default function GuestRoute({ children }) {
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext);
  return (
    <Route
      render={() => {
        return !isAuthenticated ? children : <Redirect to="/profile" />;
      }}
    />
  );
}
