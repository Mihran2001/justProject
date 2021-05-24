import React, { useState } from "react";
// import "./styles.css";

export default function InputImg() {
  const [srcContent, setSrcContent] = useState("");
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    // console.log(typeof fileString);
    setSrcContent(fileString);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <div className="App">
      <form>
        <input type="file" onChange={onChange} />
      </form>
      {/* <div style={{ height: "100px", width: "100px" }}> */}
      <img src={srcContent} height="500px" width="400px" />
      {/* </div> */}
    </div>
  );
}
