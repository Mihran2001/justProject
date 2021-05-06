import React from "react";
import "./style.less";
import Sidebar from "./Sidebar/index";

export default function CvCreator() {
  return (
    <div className="background">
      <div className="cv">
        <Sidebar />
      </div>{" "}
    </div>
  );
}
