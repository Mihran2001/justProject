import React from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";

export default function InputForm({ setPlaceholder, icon }) {
  return (
    <div className="input-and-icon">
      {icon}
      <Input
        style={{ width: "300px", marginRight: "20px" }}
        placeholder={setPlaceholder}
      />
    </div>
  );
}
