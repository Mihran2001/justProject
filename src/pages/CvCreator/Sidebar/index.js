import React, { useState } from "react";
import "./style.less";
import { Avatar, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  MobileOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Item from "antd/lib/list/Item";

export default function Sidebar() {
  const [inputs, setInput] = useState([]);
  const [languages, setLanguages] = useState([]);

  const addInput = () => {
    return setInput([
      ...inputs,
      {
        id: inputs.length,
        value: "",
      },
    ]);
  };

  // console.log(inputs);

  const handleInputChange = (id, value) => {
    return setInput(() => {
      return inputs.map((input) => {
        if (id === input.id) {
          return {
            ...input,
            value,
          };
        }
        return input;
      });
    });
  };

  const addLanguage = () => {
    return setLanguages([
      ...languages,
      {
        id: languages.length,
        value: "",
      },
    ]);
  };

  const handleLanguageChange = (id, value) => {
    return setLanguages(() => {
      return languages.map((language) => {
        if (language.id === id) {
          return {
            ...language,
            value,
          };
        }
        return language;
      });
    });
  };

  console.log(languages);

  return (
    <div className="cv-sidebar">
      <input
        type="file"
        id="myfile"
        name="myfile"
        style={{ display: "none" }}
      />
      <label for="myfile">
        <Avatar icon={<UserOutlined />} />
      </label>
      <div className="mail-phone-number">
        <MailOutlined className="mail-icon" />
        <Input placeholder="Input your email" style={{ marginTop: "10px" }} />
        <MobileOutlined className="phone-icon" />
        <Input
          placeholder="Input your Phone Number"
          style={{ marginTop: "10px" }}
        />
      </div>
      <div className="skills">
        <h3> Skills </h3>
        <PlusCircleOutlined
          className="plus-icon"
          style={{ fontSize: "25px" }}
          onClick={addInput}
        />
      </div>
      <div className="skill-inputs">
        {inputs.map((input) => {
          return (
            <input
              onChange={(e) => handleInputChange(input.id, e.target.value)}
              value={input.value}
              key={input.id}
            />
          );
        })}
      </div>

      <div className="languages">
        <h3> Languages </h3>
        <PlusCircleOutlined
          className="plus-icon"
          style={{ fontSize: "25px" }}
          onClick={addLanguage}
        />
      </div>

      <div className="language-inputes">
        {languages.map((language) => {
          return (
            <input
              onChange={(e) =>
                handleLanguageChange(language.id, e.target.value)
              }
              key={language.id}
              value={language.value}
            />
          );
        })}
      </div>
    </div>
  );
}
