import React from "react";
import "./style.less";
import { Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const StyledHeader = styled.header`
  height: 300px;
  width: 100%;
  background-color: rgb(24, 52, 71);
  border-radius: 15px 15px 0 0;
`;

const NameSurnameDescription = styled.div`
  width: 70%;
  margin: 40px;
`;

const NameSurname = styled(Input)`
  width: 400px;
  border: none;
  outline: none;
  background-color: #183447;
  color: white;
  font-size: 30px;
`;

const Proffesion = styled(Input)`
  width: 400px;
  border: none;
  outline: none;
  background-color: rgb(24, 52, 71);
  color: white;
  font-size: 17px;
`;

const Textarea = styled(TextArea)`
  margin: 30px;
  width: 70%;
`;

export default function Header() {
  return (
    // <header className="second-template-header">
    //   <div className="name-surname-description">
    //     <div className="name-surname-proffesion">
    //       <Input
    //         placeholder="Name Surname"
    //         style={{
    //           width: "400px",
    //           border: "none",
    //           outline: "none",
    //           backgroundColor: "#183447",
    //           color: "white",
    //         }}
    //         size="large"
    //       />
    //       <Input
    //         placeholder="Profession"
    //         style={{
    //           width: "400px",
    //           border: "none",
    //           outline: "none",
    //           backgroundColor: "rgb(24, 52, 71)",
    //           color: "white",
    //           fontSize: "17px",
    //         }}
    //       />
    //     </div>
    //     <div className="description">
    //       <TextArea rows={4} style={{ marging: "30px" }} />{" "}
    //     </div>
    //   </div>
    // </header>
    <StyledHeader>
      <NameSurnameDescription>
        <NameSurname placeholder="Name Surname" />
        <Proffesion placeholder="Profession" />
      </NameSurnameDescription>
      <Textarea rows={4} />
    </StyledHeader>
  );
}
