import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function InputImg() {
  const [srcContent, setSrcContent] = useState("");
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
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
    <div
      className="input-img-second-template"
      style={{
        display: "flex",
        height: "150px",
        width: "150px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="file"
        id="myfile"
        name="myfile"
        style={{ display: "none" }}
        onChange={onChange}
      />
      <label
        htmlFor="myfile"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {srcContent === "" ? (
          <Avatar icon={<UserOutlined />} />
        ) : (
          <img
            src={srcContent}
            height="100px"
            width="100px"
            style={{ borderRadius: "50%" }}
            style={{ height: "100%", width: "100%" }}
          />
        )}
      </label>
    </div>
  );
}
