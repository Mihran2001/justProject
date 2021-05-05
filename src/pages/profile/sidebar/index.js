import React, { useState, useContext, createContext } from "react";
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
import { ModeContext } from "../../../providers/ModeProvider";
import { ThemeModes } from "..";

const { Option } = Select;

export default function Sidebar() {
  const { mode, setMode } = useContext(ModeContext);
  function handleChange(value) {
    console.log(`selected ${value}`);
    setMode(value);
  }
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-icon">
          <UserOutlined style={{ fontSize: "36px", color: "#08c" }} />{" "}
        </div>
        <div className="user-name">
          <h6> Narek Sahakyan </h6>
          <a href=""> Free plan </a>
        </div>
      </div>
      <div className="upgrade-button">
        <Button style={{ paddingRight: "50px", paddingLeft: "50px" }} block>
          Upgrade
        </Button>
      </div>
      <p className="free-plan">
        With the free plan you can only enjoy watching free matches
      </p>

      <div className="sidebar-body">
        <div className="personalProfile">
          <UserOutlined style={{ fontSize: "20px" }} className="icon-color" />{" "}
          <p> Personal Info </p>
        </div>
        <div className="subscriptions">
          <CreditCardOutlined
            style={{ fontSize: "20px" }}
            className="icon-color"
          />
          <p> Subscriptions </p>
        </div>
        <div className="changePassword">
          <ShoppingOutlined
            style={{ fontSize: "20px" }}
            className="icon-color"
          />
          <p> Change Password </p>
        </div>
      </div>
      <p style={{ fontSize: "small" }}> Appearance </p>
      <Select
        defaultValue={ThemeModes.LIGHT_MODE}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {/* <Option value="System">System</Option> */}
        <Option value={ThemeModes.DARK_MODE}>Dark Mode</Option>
        <Option value={ThemeModes.LIGHT_MODE}>Ligth Mode</Option>
      </Select>
    </div>
  );
}
