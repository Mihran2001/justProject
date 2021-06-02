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
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useProviderDispatchHook } from "../Provider";
import { useProviderStateHook } from "../Provider";
import AutoGrowInput from "./AutoGrowInput";
import { Input } from "antd";

export default function Body() {
  const [value, setValue] = useState("");
  const {
    addAreasOfExpertise,
    changeAreasOfExpertise,
    addCertificate,
    changeCertificate,
    addEducation,
    changeEducationValue,
  } = useProviderDispatchHook();
  const state = useProviderStateHook();

  // console.log(state.expertiseInputs);
  // console.log(state.certificateInputes);
  console.log(state.educationInputes);

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
              // onClick={addEducation}
            />
          </LanguagesAdd>
        </Languages>
      </EducationAndLanguages>
    </CvBody>
  );
}
