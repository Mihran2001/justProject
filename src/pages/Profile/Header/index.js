import React from "react";
import "./style.less";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const changePath = (path) => {
    history.push(path);
  };

  const logOut = (key) => {
    localStorage.removeItem(key);
    history.push("/auth/login");
  };
  return (
    <div>
      <div className="go-to-cv">
        <Button variant="secondary" onClick={() => changePath("/profile/cv")}>
          Create CV
        </Button>
      </div>
      <div className="logOut-from-profile">
        <Button variant="light" onClick={() => logOut("access-token")}>
          LogOut
        </Button>
      </div>
    </div>
  );
}
