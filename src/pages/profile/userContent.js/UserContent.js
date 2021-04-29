import React from "react";
import "antd/dist/antd.less";
import { UserAddOutlined } from "@ant-design/icons";
import "./content.less";

export default function UserContent() {
  return (
    <div className="user-content">
      <div className="content-header">
        <h3> Personal Profile </h3>
        <p> Manage your Personal and Account information </p>
      </div>
      <div className="change-contacts">
        <UserAddOutlined className="add-photo" />
      </div>
    </div>
  );
}
