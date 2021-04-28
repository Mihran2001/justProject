// import React, { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

// export default function Profile() {
//   const [theme, setTheme] = useState("ligth");

//   const themToggler = () => {
//     theme === "ligth" ? setTheme("dark") : setTheme("ligth");
//   };
//   return <button onClick={() => themToggler()}>Profile</button>;
// }

import React from "react";
import "./style.less";
import "antd/dist/antd.less";
import {
  UserOutlined,
  CreditCardOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

export default function Profile() {
  return (
    <div className="main">
      <div className="userPorfile">
        <div className="sidebar">
          <div className="sidebarHeader">
            <div className="profileIcon">
              <UserOutlined style={{ fontSize: "36px", color: "#08c" }} />{" "}
            </div>
            <div className="userName">
              <h6> Narek Sahakyan </h6>
              <a href=""> Free plan </a>
            </div>
          </div>
          <div className="upgradeButton">
            <Button style={{ paddingRight: "50px", paddingLeft: "50px" }} block>
              Upgrade
            </Button>
          </div>
          <p className="freePlan">
            With the free plan you can only enjoy watching free matches
          </p>

          <div className="sidebarBody">
            <div className="personalProfile">
              <UserOutlined style={{ fontSize: "20px", color: "black" }} />{" "}
              <p> Personal Info </p>
            </div>
            <div className="subscriptions">
              <CreditCardOutlined
                style={{ fontSize: "20px", color: "black" }}
              />
              <p> Subscriptions </p>
            </div>
            <div className="changePassword">
              <ShoppingOutlined style={{ fontSize: "20px", color: "black" }} />
              <p> Change Password </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
