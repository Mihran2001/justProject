import React from "react";
import "./styles.css";

export default function Body() {
  return (
    <div className="main-body">
      <div className="top-section">
        <div className="icons-and-content">
          <div className="icons">
            <i className="icon-profile icon-cv"> </i>
          </div>
          <div className="icon-content">
            <h4> View sample cover letters </h4>
            <p> All Job Industries, Multiple formats </p>
          </div>
        </div>
        <div className="icons-and-content">
          <div className="icons">
            <i className="icon-document-edit icon-edit"> </i>
          </div>
          <div className="icon-content">
            <h4> Manage and edit your resume </h4>
            <p> Verify of Formats </p>
          </div>
        </div>
        <div className="icons-and-content">
          <div className="icons">
            <i className="icon-copy copy-icon"> </i>
          </div>
          <div className="icon-content">
            <h4> Multiple versions of your resume </h4>
            <p> Post your resume online free </p>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="steps">
          <div className="circle">
            <h4> 1 </h4>
          </div>
          <div className="coose-template">
            <p> Choose Template </p>
          </div>
        </div>
        <div className="steps">
          <div className="easy-steps">
            <h4> Easy 3 Steps </h4>
          </div>
          <div className="circle">
            <h4> 2 </h4>
          </div>
          <div className="coose-template">
            <p> Build Resume </p>
          </div>
        </div>
        <div className="steps">
          <div className="circle">
            <h4> 3 </h4>
          </div>
          <div className="coose-template">
            <p> Review </p>
          </div>
        </div>
      </div>
    </div>
  );
}
