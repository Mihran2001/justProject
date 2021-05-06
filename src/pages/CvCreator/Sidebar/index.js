import React from "react";
import "./style.less";
import { Avatar, Input } from "antd";
import { UserOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";

export default function Sidebar() {
  return (
    <div className="cv-sidebar">
      <input
        type="file"
        id="myfile"
        name="myfile"
        style={{ display: "none" }}
      />
      <label for="myfile">
        <Avatar icon={<UserOutlined />} />
      </label>
      <div className="mail-phone-number">
        <MailOutlined className="mail-icon" />
        <Input placeholder="Input your email" style={{ marginTop: "10px" }} />
        <MobileOutlined className="phone-icon" />
        <Input
          placeholder="Input your Phone Number"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
