import React from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";
import uuid from "react-uuid";

export default function InputForm({
  placeholder,
  icon,
  name,
  onChange,
  value,
  style = {},
  inputStyle = {},
}) {
  return (
    <div className="input-and-icon" style={style}>
      {icon}
      <Input
        style={{ width: "300px", marginRight: "20px", ...inputStyle }}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        // value={value}
        name={name}
      />
    </div>
  );
}
