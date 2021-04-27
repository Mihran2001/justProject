import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import PrivateRoute from "./PrivateRout";
import { useAuthProviderState } from "./providers/AuthProvider";

function NotFoundPage() {
  return <h3>Not correct url</h3>;
}

export default function Router() {
  const { isAuth } = useAuthProviderState();
  return (
    <BrowserRouter>
      {isAuth() && (
        <Redirect
          to={{
            pathname: "/profile",
          }}
        />
      )}
      <Switch>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/profile" exact>
          <Profile />
        </PrivateRoute>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
