import React from "react";
import {
  CvBody,
  AreasOfExpertise,
  AreasOfExpertiseAdd,
  ExpertiseInputs,
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function Body() {
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
          />
        </AreasOfExpertiseAdd>
        <ExpertiseInputs />
      </AreasOfExpertise>
    </CvBody>
  );
}
