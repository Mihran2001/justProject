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
import { Space, Typography, Divider } from "antd";
import uuid from "react-uuid";

export default function Sidebar() {
  const [inputs, setInput] = useState([]);
  const [languages, setLanguages] = useState([]);

  const addInput = () => {
    return setInput([
      ...inputs,
      {
        id: uuid(),
        value: "",
      },
    ]);
  };

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
        id: uuid(),
        value: "",
        lvlLanguage: "Native or Bilingual Proficiency",
        bool: false,
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

  const handleBool = (id) => {
    return setLanguages((prev) => {
      return prev.map((language) => {
        if (language.id === id) {
          return {
            ...language,
            bool: true,
          };
        }
        return language;
      });
    });
  };

  const handleLvl = (lvlLanguage, id) => {
    return setLanguages((prev) => {
      return prev.map((language) => {
        if (language.id === id) {
          return {
            ...language,
            lvlLanguage,
            bool: false,
          };
        }
        return language;
      });
    });
  };

  console.log({ languages, inputs });

  return (
    <div className="cv-sidebar">
      <input
        type="file"
        id="myfile"
        name="myfile"
        style={{ display: "none" }}
      />
      <label htmlFor="myfile">
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
            <div key={language.id}>
              <input
                onChange={(e) =>
                  handleLanguageChange(language.id, e.target.value)
                }
                value={language.value}
              />
              {language.bool ? (
                <Space
                  split={<Divider type="vertical" />}
                  style={{
                    backgroundColor: "slategrey",
                    marginTop: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography.Link
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Elementary Proficiency", language.id)
                    }
                  >
                    1/5
                  </Typography.Link>
                  <Typography.Link
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Limited Working Proficiency", language.id)
                    }
                  >
                    2/5
                  </Typography.Link>
                  <Typography.Link
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Professional Working Proficiency", language.id)
                    }
                  >
                    3/5
                  </Typography.Link>
                  <Typography.Link
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Full Professional Proficiency", language.id)
                    }
                  >
                    4/5
                  </Typography.Link>
                  <Typography.Link
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Native or Bilingual Proficiency", language.id)
                    }
                  >
                    5/5
                  </Typography.Link>
                </Space>
              ) : (
                <p
                  style={{ fontSize: "13px" }}
                  onClick={() => handleBool(language.id)}
                >
                  {language.lvlLanguage}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
