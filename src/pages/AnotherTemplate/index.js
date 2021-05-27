import React from "react";
import "./style.less";
import Header from "./Header/index";
import Body from "./Body/index";

export default function ChooseTemplate() {
  return (
    <div className="another-cv">
      <div
        className="cv-content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Body />
      </div>
    </div>
  );
}
