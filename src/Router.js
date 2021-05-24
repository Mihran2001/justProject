import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index";
import Register from "./pages/auth/Register/index";
import Login from "./pages/auth/Login/index";
import PrivateRoute from "./PrivateRout";
import { useAuthProviderState } from "./providers/AuthProvider";
import CvCreator from "./pages/CvCreator/index";
import GuestRoute from "./GuestRoute";
import AnotherTemplate from "./pages/AnotherTemplate/index";

function NotFoundPage() {
  return <h3>Not correct url</h3>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute path="/auth/register">
          <Register />
        </GuestRoute>
        <GuestRoute path="/auth/login">
          <Login />
        </GuestRoute>
        <Route path="/" exact>
          <Home />
        </Route>

        <PrivateRoute path="/profile/cv/another-template">
          <AnotherTemplate />
        </PrivateRoute>
        <PrivateRoute path="/profile/cv">
          <CvCreator />
        </PrivateRoute>
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
