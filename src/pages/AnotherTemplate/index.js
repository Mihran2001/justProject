import React from "react";
import "./style.less";
import Header from "./Header/index";

export default function ChooseTemplate() {
  return (
    <div className="another-cv">
      <div
        className="cv-content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Header />
      </div>
    </div>
  );
}
