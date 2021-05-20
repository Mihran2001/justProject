import React, { useReducer, useState } from "react";
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

const inputTypes = {
  SET_SKILL: "SET_SKILL",
  HANDLE_INPUT_CHANGE: "HANDLE_INPUT_CHANGE",
  ADD_LANGUAGE: "ADD_LANGUAGE",
  HANDLE_LANGUAGE_CHANGE: "HANDLE_LANGUAGE_CHANGE",
  HANDLE_BOOL: "HANDLE_BOOL",
  HANDLE_LVL: "HANDLE_LVL",
};

const reducer = (state, action) => {
  if (action.type === inputTypes.SET_SKILL) {
    return {
      ...state,
      skills: [
        ...state.skills,
        {
          id: action.id,
          value: action.value,
        },
      ],
    };
  } else if (action.type === inputTypes.HANDLE_INPUT_CHANGE) {
    const handledSkills = state.skills.map((input) => {
      if (action.id === input.id) {
        return {
          ...input,
          value: action.value,
        };
      }
      return input;
    });

    return { ...state, skills: handledSkills };
  } else if (action.type === inputTypes.ADD_LANGUAGE) {
    return {
      ...state,
      languages: {
        ...state.languages,
        id: uuid(),
        value: "",
        lvlLanguage: "Native or Bilingual Proficiency",
        bool: false,
      },
    };
  } else if (action.type === inputTypes.HANDLE_LANGUAGE_CHANGE) {
    const handledLanguage = state.languages.map((language) => {
      if (language.id === action.id) {
        return {
          ...language,
          value: action.value,
        };
      }
      return language;
    });
    return {
      ...state,
      languages: handledLanguage,
    };
  } else if (action.type === inputTypes.HANDLE_BOOL) {
    const languages = state.languages.map((language) => {
      if (language.id === action.id) {
        return {
          ...language,
          bool: true,
        };
      }
      return language;
    });
    return {
      ...state,
      languages,
    };
  } else if (action.type === inputTypes.HANDLE_LVL) {
    const obj = state.languages.map((language) => {
      if (language.id === action.id) {
        return {
          ...language,
          lvlLanguage: action.lvlLanguage,
          bool: false,
        };
      }
      return language;
    });
    return {
      ...state,
      languages: obj,
    };
  }
};

export default function Sidebar() {
  const [state, dispatch] = useReducer(reducer, {
    skills: [],
    languages: [],
  });
  // const [skills, setSkills] = useState([]);
  // const [languages, setLanguages] = useState([]);

  const addSkill = () => {
    // return setSkills([
    //   ...skills,
    //   {
    //     id: uuid(),
    //     value: "",
    //   },
    // ]);
    dispatch({
      type: inputTypes.SET_SKILL,
      id: uuid(),
      value: "",
    });
  };

  const handleInputChange = (id, value) => {
    // return setSkills(() => {
    //   return skills.map((input) => {
    //     if (id === input.id) {
    //       return {
    //         ...input,
    //         value,
    //       };
    //     }
    //     return input;
    //   });
    // });
    dispatch({
      type: inputTypes.HANDLE_INPUT_CHANGE,
      id,
      value,
    });
  };

  const addLanguage = () => {
    // return setLanguages([
    //   ...languages,
    //   {
    //     id: uuid(),
    //     value: "",
    //     lvlLanguage: "Native or Bilingual Proficiency",
    //     bool: false,
    //   },
    // ]);
    dispatch({
      type: inputTypes.ADD_LANGUAGE,
    });
  };

  const handleLanguageChange = (id, value) => {
    // return setLanguages(() => {
    //   return languages.map((language) => {
    //     if (language.id === id) {
    //       return {
    //         ...language,
    //         value,
    //       };
    //     }
    //     return language;
    //   });
    // });
    dispatch({
      type: inputTypes.HANDLE_LANGUAGE_CHANGE,
      id,
      value,
    });
  };

  const handleBool = (id) => {
    // return setLanguages((prev) => {
    //   return prev.map((language) => {
    //     if (language.id === id) {
    //       return {
    //         ...language,
    //         bool: true,
    //       };
    //     }
    //     return language;
    //   });
    // });
    dispatch({
      type: inputTypes.HANDLE_BOOL,
      id,
    });
  };

  const handleLvl = (lvlLanguage, id) => {
    // return setLanguages((prev) => {
    //   return prev.map((language) => {
    //     if (language.id === id) {
    //       return {
    //         ...language,
    //         lvlLanguage,
    //         bool: false,
    //       };
    //     }
    //     return language;
    //   });
    // });
    dispatch({
      type: inputTypes.HANDLE_LVL,
      lvlLanguage,
      id,
    });
  };

  // console.log({ languages, skills });

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
        <Input
          placeholder="Input your email"
          style={{ marginTop: "10px", border: "none" }}
        />
        <MobileOutlined className="phone-icon" />
        <Input
          placeholder="Input your Phone Number"
          style={{ marginTop: "10px", border: "none" }}
        />
      </div>
      <div className="skills">
        <h3> Skills </h3>
        <PlusCircleOutlined
          className="plus-icon"
          style={{ fontSize: "25px" }}
          onClick={addSkill}
        />
      </div>
      <div className="skill-skills">
        {state.skills.map((input) => {
          return (
            <input
              onChange={(e) => handleInputChange(input.id, e.target.value)}
              value={input.value}
              key={input.id}
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "#313c4e",
                marginBottom: "5px",
                borderRadius: "6px",
                color: "#fff",
              }}
              // onkeypress={
              //   (this.style.width = (this.value.length + 1) * 8 + "px")
              // }
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
        {state.languages.map((language) => {
          return (
            <div key={language.id}>
              <input
                onChange={(e) =>
                  handleLanguageChange(language.id, e.target.value)
                }
                value={language.value}
                style={{ border: "none", outline: "none", fontSize: "20px" }}
                placeholder={"Input Language"}
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
                    className="lvl-numbers"
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Elementary Proficiency", language.id)
                    }
                  >
                    1/5
                  </Typography.Link>
                  <Typography.Link
                    className="lvl-numbers"
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Limited Working Proficiency", language.id)
                    }
                  >
                    2/5
                  </Typography.Link>
                  <Typography.Link
                    className="lvl-numbers"
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Professional Working Proficiency", language.id)
                    }
                  >
                    3/5
                  </Typography.Link>
                  <Typography.Link
                    className="lvl-numbers"
                    style={{ color: "white" }}
                    onClick={() =>
                      handleLvl("Full Professional Proficiency", language.id)
                    }
                  >
                    4/5
                  </Typography.Link>
                  <Typography.Link
                    className="lvl-numbers"
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
                  className="language-lvl"
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
