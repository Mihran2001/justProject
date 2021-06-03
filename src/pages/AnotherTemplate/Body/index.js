import React, { useState } from "react";
import {
  CvBody,
  AreasOfExpertise,
  AreasOfExpertiseAdd,
  ExpertiseInputsMainDiv,
  Certificates,
  CertificatesAdd,
  CertificatesInputsDiv,
  Education,
  EducationAdd,
  EducationInputsMainDiv,
  EducationInputDiv,
  Languages,
  LanguagesAdd,
  EducationAndLanguages,
  LanguageInputsDiv,
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useProviderDispatchHook } from "../Provider";
import { useProviderStateHook } from "../Provider";
import AutoGrowInput from "./AutoGrowInput";
import { Space, Typography, Divider, Input } from "antd";

export default function Body() {
  const [value, setValue] = useState("");
  const {
    addAreasOfExpertise,
    changeAreasOfExpertise,
    addCertificate,
    changeCertificate,
    addEducation,
    changeEducationValue,
    addLanguage,
    inputLanguage,
    handleBool,
    handleLvl,
  } = useProviderDispatchHook();
  const state = useProviderStateHook();

  // console.log(state.expertiseInputs);
  // console.log(state.certificateInputes);
  // console.log(state.educationInputes);
  console.log(state.languages);

  return (
    <CvBody>
      <AreasOfExpertise>
        <AreasOfExpertiseAdd>
          <h2 style={{ color: "rgb(103, 119, 135)" }}> Areas of Expertise </h2>
          <PlusCircleOutlined
            style={{
              fontSize: "25px",
              margin: "10px",
              color: "rgb(103, 119, 135)",
            }}
            onClick={addAreasOfExpertise}
          />
        </AreasOfExpertiseAdd>
        <ExpertiseInputsMainDiv>
          {state.expertiseInputs.map((item) => {
            return (
              <AutoGrowInput
                key={item.id}
                onChange={setValue}
                item={item}
                changeAreasOfExpertise={changeAreasOfExpertise}
              />
            );
          })}
        </ExpertiseInputsMainDiv>
      </AreasOfExpertise>
      <Certificates>
        <CertificatesAdd>
          <h2 style={{ color: "rgb(103, 119, 135)" }}> Certificates </h2>
          <PlusCircleOutlined
            style={{
              fontSize: "25px",
              margin: "10px",
              color: "rgb(103, 119, 135)",
            }}
            onClick={addCertificate}
          />
        </CertificatesAdd>
        <CertificatesInputsDiv>
          {state.certificateInputes.map((item) => {
            return (
              <Input
                key={item.id}
                value={item.value}
                onChange={(e) => changeCertificate(item.id, e.target.value)}
                style={{
                  width: "90%",
                  marginTop: "10px",
                  border: "none",
                  outline: "none",
                }}
                placeholder="Certificate Name And Date"
              />
            );
          })}
        </CertificatesInputsDiv>
      </Certificates>
      <EducationAndLanguages>
        <Education>
          <EducationAdd>
            <h2 style={{ color: "rgb(103, 119, 135)" }}> Education </h2>
            <PlusCircleOutlined
              style={{
                fontSize: "25px",
                margin: "10px",
                color: "rgb(103, 119, 135)",
              }}
              onClick={addEducation}
            />
          </EducationAdd>
          <EducationInputsMainDiv>
            {state.educationInputes.map((item) => {
              return (
                <EducationInputDiv key={item.id}>
                  <Input
                    value={item.value.universityName}
                    onChange={(e) =>
                      changeEducationValue(
                        item.id,
                        e.target.value,
                        "universityName"
                      )
                    }
                    placeholder="University Name"
                    style={{ border: "none", fontSize: "20px" }}
                  />
                  <Input
                    value={item.value.faculty}
                    onChange={(e) =>
                      changeEducationValue(item.id, e.target.value, "faculty")
                    }
                    placeholder="Faculty"
                    style={{ border: "none" }}
                  />
                  <Input
                    value={item.value.date}
                    onChange={(e) =>
                      changeEducationValue(item.id, e.target.value, "date")
                    }
                    placeholder="Date"
                    style={{ border: "none" }}
                  />
                </EducationInputDiv>
              );
            })}
          </EducationInputsMainDiv>
        </Education>
        <Languages>
          <LanguagesAdd>
            <h2 style={{ color: "rgb(103, 119, 135)" }}> Languages </h2>
            <PlusCircleOutlined
              style={{
                fontSize: "25px",
                margin: "10px",
                color: "rgb(103, 119, 135)",
              }}
              onClick={addLanguage}
            />
          </LanguagesAdd>
          {state.languages.map((item) => {
            return (
              <LanguageInputsDiv key={item.id}>
                <Input
                  value={item.value}
                  onChange={(e) => inputLanguage(item.id, e.target.value)}
                  placeholder="Input Language"
                  style={{ border: "none", outline: "none", fontSize: "20px" }}
                />
                {item.bool ? (
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
                        handleLvl("Elementary Proficiency", item.id)
                      }
                    >
                      1/5
                    </Typography.Link>
                    <Typography.Link
                      className="lvl-numbers"
                      style={{ color: "white" }}
                      onClick={() =>
                        handleLvl("Limited Working Proficiency", item.id)
                      }
                    >
                      2/5
                    </Typography.Link>
                    <Typography.Link
                      className="lvl-numbers"
                      style={{ color: "white" }}
                      onClick={() =>
                        handleLvl("Professional Working Proficiency", item.id)
                      }
                    >
                      3/5
                    </Typography.Link>
                    <Typography.Link
                      className="lvl-numbers"
                      style={{ color: "white" }}
                      onClick={() =>
                        handleLvl("Full Professional Proficiency", item.id)
                      }
                    >
                      4/5
                    </Typography.Link>
                    <Typography.Link
                      className="lvl-numbers"
                      style={{ color: "white" }}
                      onClick={() =>
                        handleLvl("Native or Bilingual Proficiency", item.id)
                      }
                    >
                      5/5
                    </Typography.Link>
                  </Space>
                ) : (
                  <p
                    style={{ fontSize: "13px" }}
                    className="language-lvl"
                    onClick={() => handleBool(item.id)}
                  >
                    {item.lvlLanguage}
                  </p>
                )}
              </LanguageInputsDiv>
            );
          })}
        </Languages>
      </EducationAndLanguages>
    </CvBody>
  );
}
