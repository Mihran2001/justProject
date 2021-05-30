import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  margin: 20px;
  margin-left: 50px;
`;

export default function ContactInputs({ icon, placeholder, onChange }) {
  return (
    <InputDiv>
      {icon}
      <Input
        style={{
          height: "20px",
          width: "300px",
          marginLeft: "10px",
          border: "none",
          outline: "none",
          background: "rgb(8 26 39)",
          color: "white",
        }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputDiv>
  );
}
