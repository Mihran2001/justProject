import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

function NotFoundPage() {
  return <h3>Not correct url</h3>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Route path="/auth/register">
            <Register />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
