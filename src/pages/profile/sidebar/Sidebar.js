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
import "./sidebar.less";
import "antd/dist/antd.less";
import {
  UserOutlined,
  CreditCardOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.less";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function Sidebar() {
  return (
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
          <CreditCardOutlined style={{ fontSize: "20px", color: "black" }} />
          <p> Subscriptions </p>
        </div>
        <div className="changePassword">
          <ShoppingOutlined style={{ fontSize: "20px", color: "black" }} />
          <p> Change Password </p>
        </div>
      </div>
      <p style={{ fontSize: "small" }}> Appearance </p>
      <Select
        defaultValue="System"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="System">System</Option>
        <Option value="DarkMode">Dark Mode</Option>
        <Option value="LigthMode">Ligth Mode</Option>
      </Select>
    </div>
  );
}
