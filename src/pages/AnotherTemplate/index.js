import React from "react";
import "./style.less";
import Header from "./Header/index";
import Body from "./Body/index";
import StateProvider from "./Provider";

export default function ChooseTemplate() {
  return (
    <div className="another-cv">
      <div
        className="cv-content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <StateProvider>
          <Header />
          <Body />
        </StateProvider>
      </div>
    </div>
  );
}
