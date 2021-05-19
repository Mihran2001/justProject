import React from "react";
import "./style.less";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";
import Header from "./Header/index";

export default function CvCreator() {
  return (
    <div className="background">
      <div className="cv">
        <Header />
        <Sidebar />
        <Main />
      </div>{" "}
    </div>
  );
}
