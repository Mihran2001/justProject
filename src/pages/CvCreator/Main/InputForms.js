import React from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";
import uuid from "react-uuid";

export default function InputForm({
  setPlaceholder,
  icon,
  userContent,
  dispatch,
  name,
}) {
  return (
    <div className="input-and-icon">
      {icon}
      <Input
        style={{ width: "300px", marginRight: "20px" }}
        placeholder={setPlaceholder}
        onChange={(e) =>
          // dispatch({ ...userContent, [name]: e.target.value })
          dispatch({
            type: "SetUserContent",
            [name]: e.target.value,
          })
        }
      />
    </div>
  );
}
