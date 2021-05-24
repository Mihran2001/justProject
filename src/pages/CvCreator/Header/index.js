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
    console.log(key);
    localStorage.removeItem(key);
    history.push("/");
  };

  const anotherTemplate = () => {
    history.push("/profile/cv/another-template");
  };
  return (
    <div>
      <div className="go-to-profile">
        <Button variant="secondary" onClick={() => changePath("/profile")}>
          Profile
        </Button>
      </div>
      <div className="logOut">
        <Button variant="light" onClick={() => logOut("access_token")}>
          LogOut
        </Button>
      </div>
      <div className="another-template">
        <Button variant="light" onClick={anotherTemplate}>
          Another Template
        </Button>
      </div>
    </div>
  );
}
