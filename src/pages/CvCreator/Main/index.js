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

const reducer = (state, action) => {
  if (action.type === "AddEducation") {
    return {
      ...state,
      education: [
        ...state.education,
        { id: uuid(), educationPlace: "", date: "", gpa: "", courses: "" },
      ],
    };
  } else if (action.type === "AddJob") {
    return {
      ...state,
      job: [
        ...state.job,
        { companyName: "", date: "", description: "", id: uuid() },
      ],
    };
  } else if (action.type === "HandleEducationInputChange") {
    {
      return {
        ...state,
        education: state.education.map((item) => {
          if (action.id === item.id) {
            return {
              ...item,
              [action.field]: action.value,
            };
          }
          return item;
        }),
      };
    }
  } else if (action.type === "HandleJobInputChange") {
    return {
      ...state,
      job: state.job.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            [action.field]: action.value,
          };
        }
        return item;
      }),
    };
  } else if (action.type === "AddProffesion") {
    return {
      ...state,
      profession: action.value,
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

  // const [userContent, setUserContent] = useState({
  //   name: "Name",
  //   surName: "Surname",
  //   profession: "",
  //   education: [],
  //   job: [],
  // });

  // const addEducation = () => {
  //   setUserContent((prev) => ({
  //     ...prev,
  //     education: [
  //       ...prev.education,
  //       { id: uuid(), educationPlace: "", date: "", gpa: "", courses: "" },
  //     ],
  //   }));
  // };

  // const addJob = () => {
  //   setUserContent((prev) => ({
  //     ...prev,
  //     job: [
  //       ...prev.job,
  //       { companyName: "", date: "", description: "", id: uuid() },
  //     ],
  //   }));
  // };

  // console.log(userContent);

  // const handleEducationInputChange = (id, value, field) => {
  //   setUserContent((prev) => {
  //     return {
  //       ...prev,
  //       education: prev.education.map((item) => {
  //         if (id === item.id) {
  //           return {
  //             ...item,
  //             [field]: value,
  //           };
  //         }
  //         return item;
  //       }),
  //     };
  //   });
  // };

  // const handleJobInputChange = (id, value, key) => {
  //   setUserContent((prev) => {
  //     return {
  //       ...prev,
  //       job: prev.job.map((item) => {
  //         if (item.id === id) {
  //           return {
  //             ...item,
  //             [key]: value,
  //           };
  //         }
  //         return item;
  //       }),
  //     };
  //   });
  // };

  // console.log(userContent.name);

  return (
    <div className="main-part">
      <div className="header">
        <div className="about-user" onClick={() => setIsModalVisible(true)}>
          <h1>
            {state.name} {state.surName}
          </h1>
        </div>

        <Input
          placeholder="Profession"
          style={{ width: "300px", marginLeft: "20px" }}
          className="profession-input"
          onChange={(e) =>
            // setUserContent({ ...userContent, profession: e.target.value })
            dispatch({
              type: "AddProffesion",
              value: e.target.value,
            })
          }
        />
      </div>
      <Modal
        // className="modal"
        bodyStyle={{ backgroundColor: "#425061" }}
        title="User Contacts"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        width={700}
      >
        <div className="allInputs">
          <InputForm
            setPlaceholder={"Name"}
            icon={<UserOutlined style={{ fontSize: "20px" }} type={"name"} />}
            // setUserContent={setUserContent}
            dispatch={dispatch}
            userContent={state}
            name={"name"}
          />
          <InputForm
            setPlaceholder={"Family Name"}
            icon={<TeamOutlined style={{ fontSize: "20px" }} />}
            dispatch={dispatch}
            userContent={state}
            name={"surName"}
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
          // onClick={addEducation}
          onClick={() =>
            dispatch({
              type: "AddEducation",
            })
          }
        />
      </div>
      <div className="all-education-divs">
        {state.education.map((item) => {
          return (
            <div className="education-div" key={item.id}>
              <Input
                // onChange={(e) =>
                //   handleEducationInputChange(
                //     item.id,
                //     e.target.value,
                //     "educationPlace"
                //   )
                // }

                onChange={(e) =>
                  dispatch({
                    type: "HandleEducationInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "educationPlace",
                    },
                  })
                }
                placeholder="Education place"
                style={{ fontSize: "25px" }}
              />

              <Input
                onChange={(e) =>
                  // handleEducationInputChange(item.id, e.target.value, "date")
                  dispatch({
                    type: "HandleEducationInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "date",
                    },
                  })
                }
                placeholder="Data"
              />

              <Input
                onChange={(e) =>
                  // handleEducationInputChange(item.id, e.target.value, "gpa")
                  dispatch({
                    type: "HandleEducationInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "gpa",
                    },
                  })
                }
                placeholder="GPA"
              />

              <Input
                onChange={(e) =>
                  // handleEducationInputChange(item.id, e.target.value, "courses")
                  dispatch({
                    type: "HandleEducationInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "courses",
                    },
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
          // onClick={addJob}
          onClick={() =>
            dispatch({
              type: "AddJob",
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
                  // handleJobInputChange(item.id, e.target.value, "companyName")
                  dispatch({
                    type: "HandleJobInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "companyName",
                    },
                  })
                }
                placeholder="Company Name"
              />

              <Input
                onChange={(e) =>
                  // handleJobInputChange(item.id, e.target.value, "date")
                  dispatch({
                    type: "HandleJobInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "date",
                    },
                  })
                }
                placeholder="Date"
              />

              <Input
                onChange={(e) =>
                  // handleJobInputChange(item.id, e.target.value, "description")
                  dispatch({
                    type: "HandleJobInputChange",
                    value: {
                      id: item.id,
                      value: e.target.value,
                      field: "description",
                    },
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
