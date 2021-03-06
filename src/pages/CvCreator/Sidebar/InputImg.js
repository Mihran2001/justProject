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
    <div className="input-img">
      <input
        type="file"
        id="myfile"
        name="myfile"
        style={{ display: "none" }}
        onChange={onChange}
      />
      <label htmlFor="myfile">
        {srcContent === "" ? (
          <Avatar icon={<UserOutlined />} />
        ) : (
          <img
            src={srcContent}
            height="100px"
            width="100px"
            style={{ borderRadius: "50%" }}
          />
        )}
      </label>
    </div>
  );
}
