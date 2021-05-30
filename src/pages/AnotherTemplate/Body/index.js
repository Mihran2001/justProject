import React, { useContext } from "react";
import {
  CvBody,
  AreasOfExpertise,
  AreasOfExpertiseAdd,
  ExpertiseInputsMainDiv,
  AreasOfExpertiseInputsDiv,
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import uuid from "react-uuid";
import { Context } from "../Provider";
import { InputNames } from "../Provider";
import { Input } from "antd";

export default function Body() {
  const { state, dispatch } = useContext(Context);

  const setInputValue = (id) => {
    for (let i = 0; i < state.expertiseInputs.length; ++i) {
      if (state.expertiseInputs[i].id === id) {
        return state.expertiseInputs.value;
      }
    }
  };

  console.log(state.expertiseInputs);
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
            onClick={(e) =>
              dispatch({
                type: InputNames.EXPERTISEINPUTS,
                value: "",
                id: uuid(),
              })
            }
          />
        </AreasOfExpertiseAdd>
        <ExpertiseInputsMainDiv>
          {state.expertiseInputs.map((item) => {
            return (
              <AreasOfExpertiseInputsDiv>
                <Input
                  key={uuid()}
                  onChange={(e) =>
                    dispatch({
                      type: InputNames.ADDEXPERTISEINPUT,
                      id: item.id,
                      value: e.target.value,
                    })
                  }
                  // value={}
                />
              </AreasOfExpertiseInputsDiv>
            );
          })}
        </ExpertiseInputsMainDiv>
      </AreasOfExpertise>
    </CvBody>
  );
}
