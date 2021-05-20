import React, { useReducer, useState } from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";
import InputForm from "./InputForms";
import {
  UserOutlined,
  TeamOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import UserSelects from "./UserSelects";
import uuid from "react-uuid";

const ActionTypes = {
  ADD_JOB: "ADD_JOB",
  ADD_EDUCATION: "ADD_EDUCATION",
  Handle_Job_Input_Change: "Handle_Job_Input_Change",
  ADD_PROFFESION: "ADD_PROFFESION",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  SET_EDUCATION_INPUT_VALUES: "SET_EDUCATION_INPUT_VALUES",
};

const InputNames = {
  NAME: "name",
  SURNAME: "surName",
};

const reducer = (state, action) => {
  if (action.type === ActionTypes.ADD_EDUCATION) {
    return {
      ...state,
      education: [
        ...state.education,
        { id: uuid(), educationPlace: "", date: "", gpa: "", courses: "" },
      ],
    };
  } else if (action.type === ActionTypes.ADD_JOB) {
    return {
      ...state,
      job: [
        ...state.job,
        { companyName: "", date: "", description: "", id: uuid() },
      ],
    };
  } else if (action.type === ActionTypes.SET_EDUCATION_INPUT_VALUES) {
    {
      return {
        ...state,
        education: state.education.map((item) => {
          if (action.id === item.id) {
            return {
              ...item,
              [action.name]: action.value,
            };
          }
          return item;
        }),
      };
    }
  } else if (action.type === ActionTypes.Handle_Job_Input_Change) {
    return {
      ...state,
      job: state.job.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            [action.name]: action.value,
          };
        }
        return item;
      }),
    };
  } else if (action.type === ActionTypes.ADD_PROFFESION) {
    return {
      ...state,
      profession: action.value,
    };
  } else if (action.type === ActionTypes.SET_INPUT_VALUE) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
};

export default function Main() {
  const [state, dispatch] = useReducer(reducer, {
    name: "Name",
    surName: "Surname",
    profession: "",
    education: [],
    job: [],
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  console.log(state);

  const handleInputChange = (name, value) => {
    dispatch({ type: ActionTypes.SET_INPUT_VALUE, name, value });
  };

  const handleEducationInputChange = (propsObj) => {
    dispatch({ type: ActionTypes.SET_EDUCATION_INPUT_VALUES, ...propsObj });
  };

  const handleJobInputChange = (propsObj) => {
    dispatch({ type: ActionTypes.Handle_Job_Input_Change, ...propsObj });
  };

  return (
    <div className="main-part">
      <div className="header">
        <div className="about-user" onClick={() => setIsModalVisible(true)}>
          <h1>
            {state[InputNames.NAME]} {state[InputNames.SURNAME]}
          </h1>
        </div>

        <Input
          placeholder="Profession"
          style={{ width: "300px", marginLeft: "20px" }}
          className="profession-input"
          onChange={(e) =>
            dispatch({
              type: ActionTypes.ADD_PROFFESION,
              value: e.target.value,
            })
          }
        />
      </div>
      <Modal
        bodyStyle={{ backgroundColor: "#425061" }}
        title="User Contacts"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        width={700}
      >
        <div className="allInputs">
          <InputForm
            placeholder={"Name"}
            icon={<UserOutlined style={{ fontSize: "20px" }} type={"name"} />}
            name={InputNames.NAME}
            // value={state[InputNames.NAME]}
            onChange={(value) => handleInputChange(InputNames.NAME, value)}
          />
          <InputForm
            placeholder="Family Name"
            icon={<TeamOutlined style={{ fontSize: "20px" }} />}
            name={InputNames.SURNAME}
            // value={state[InputNames.SURNAME]}
            onChange={(value) => handleInputChange(InputNames.SURNAME, value)}
          />
        </div>
        <UserSelects startDate={startDate} setStartDate={setStartDate} />
        <div className="allSelects"></div>
      </Modal>

      <div className="education">
        <h3> Education </h3>
        <PlusCircleOutlined
          className="plus-icon"
          style={{ fontSize: "25px" }}
          onClick={() =>
            dispatch({
              type: ActionTypes.ADD_EDUCATION,
            })
          }
        />
      </div>
      <div className="all-education-divs">
        {state.education.map((item) => {
          return (
            <div className="education-div" key={item.id}>
              <Input
                onChange={(e) =>
                  handleEducationInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "educationPlace",
                  })
                }
                placeholder="Education place"
                style={{ fontSize: "25px" }}
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "date",
                  })
                }
                placeholder="Date"
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "gpa",
                  })
                }
                placeholder="GPA"
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "courses",
                  })
                }
                placeholder="Courses"
              />
            </div>
          );
        })}
      </div>
      <div className="certificates">
        <h3> Certificates/Job experience </h3>
        <PlusCircleOutlined
          className="plus-icon"
          style={{ fontSize: "25px" }}
          onClick={() =>
            dispatch({
              type: ActionTypes.ADD_JOB,
            })
          }
        />
      </div>

      <div className="job-divs">
        {state.job.map((item) => {
          return (
            <div className="job-inputes" key={item.id}>
              <Input
                onChange={(e) =>
                  handleJobInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "companyName",
                  })
                }
                placeholder="Company Name"
              />

              <Input
                onChange={(e) =>
                  handleJobInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "date",
                  })
                }
                placeholder="Date"
              />

              <Input
                onChange={(e) =>
                  handleJobInputChange({
                    id: item.id,
                    value: e.target.value,
                    name: "description",
                  })
                }
                placeholder="Description"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
