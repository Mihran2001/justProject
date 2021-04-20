import React from "react";
import "./styles.css";

export default function Body() {
  return (
    <div className="main-body">
      <div className="top-section">
        <div className="first-icon">
          <i className="icon-profile icon-cv"> </i>
          <div className="first-icon-content">
            {/* <h3> View sample cover letters </h3>
            <p> All Job Industries, Multiple formats </p> */}
          </div>
        </div>
        <div className="second-icon">
          <i className="icon-document-edit icon-edit"> </i>
        </div>
        <div className="third-icon">
          <i className="icon-copy copy-icon"> </i>
        </div>
      </div>
      <div className="bottom-section">
        <div className="first-step">
          <div className="first-circle"></div>
        </div>
        <div className="second-step">
          <div className="second-circle"></div>
        </div>
        <div className="third-step">
          <div className="third-circle"></div>
        </div>
      </div>
    </div>
  );
}
