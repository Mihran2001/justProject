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
import { InputNames } from "../inputNames";
import { Input } from "antd";
import { useProviderDispatchHook } from "../Provider";
import { useProviderStateHook } from "../Provider";

export default function Body() {
  const { dispatch } = useContext(Context);
  const { addAreasOfExpertise, changeAreasOfExpertise } =
    useProviderDispatchHook();
  const state = useProviderStateHook();

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
            // onClick={(e) =>
            //   dispatch({
            //     type: InputNames.EXPERTISEINPUTS,
            //     value: "",
            //     id: uuid(),
            //   })
            // }
            onClick={addAreasOfExpertise}
          />
        </AreasOfExpertiseAdd>
        <ExpertiseInputsMainDiv>
          {state.expertiseInputs.map((item) => {
            return (
              <AreasOfExpertiseInputsDiv>
                <Input
                  key={item.id}
                  // onChange={(e) =>
                  //   dispatch({
                  //     type: InputNames.ADDEXPERTISEINPUT,
                  //     id: item.id,
                  //     value: e.target.value,
                  //   })
                  // }
                  onChange={(e) =>
                    changeAreasOfExpertise(item.id, e.target.value)
                  }
                  value={item.value}
                />
              </AreasOfExpertiseInputsDiv>
            );
          })}
        </ExpertiseInputsMainDiv>
      </AreasOfExpertise>
    </CvBody>
  );
}
