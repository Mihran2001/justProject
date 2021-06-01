import React, { useState } from "react";
import {
  CvBody,
  AreasOfExpertise,
  AreasOfExpertiseAdd,
  ExpertiseInputsMainDiv,
  Certificates,
  CertificatesAdd,
  CertificatesInputsDiv,
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
  } = useProviderDispatchHook();
  const state = useProviderStateHook();

  console.log(state.expertiseInputs);
  console.log(state.certificateInputes);

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
    </CvBody>
  );
}
