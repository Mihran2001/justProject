import React from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";
import uuid from "react-uuid";

export default function InputForm({
  setPlaceholder,
  icon,
  userContent,
  setUserContent,
  type,
}) {
  return (
    <div className="input-and-icon">
      {icon}
      <Input
        style={{ width: "300px", marginRight: "20px" }}
        placeholder={setPlaceholder}
        onChange={(e) =>
          setUserContent({ ...userContent, [type]: e.target.value })
        }
        key={uuid()}
      />
    </div>
  );
}
