import React, { useState } from "react";
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

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [userContent, setUserContent] = useState({
    name: "Name",
    surName: "Surname",
    profession: "",
    education: [],
    job: [],
  });

  const addEducation = () => {
    setUserContent((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: uuid(), educationPlace: "", date: "", gpa: "", courses: "" },
      ],
    }));
  };

  const addJob = () => {
    setUserContent((prev) => ({
      ...prev,
      job: [
        ...prev.job,
        { companyName: "", date: "", description: "", id: uuid() },
      ],
    }));
  };

  console.log(userContent);

  const handleEducationInputChange = (id, value, field) => {
    setUserContent((prev) => {
      return {
        ...prev,
        education: prev.education.map((item) => {
          if (id === item.id) {
            return {
              ...item,
              [field]: value,
            };
          }
          return item;
        }),
      };
    });
  };

  const handleJobInputChange = (id, value, key) => {
    setUserContent((prev) => {
      return {
        ...prev,
        job: prev.job.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              [key]: value,
            };
          }
          return item;
        }),
      };
    });
  };

  console.log(userContent.name);

  return (
    <div className="main-part">
      <div className="header">
        <div className="about-user" onClick={() => setIsModalVisible(true)}>
          <h1>
            {userContent.name} {userContent.surName}
          </h1>
        </div>

        <Input
          placeholder="Profession"
          style={{ width: "300px", marginLeft: "20px" }}
          className="profession-input"
          onChange={(e) =>
            setUserContent({ ...userContent, profession: e.target.value })
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
            setUserContent={setUserContent}
            userContent={userContent}
            type={"name"}
          />
          <InputForm
            setPlaceholder={"Family Name"}
            icon={<TeamOutlined style={{ fontSize: "20px" }} />}
            setUserContent={setUserContent}
            userContent={userContent}
            type={"surName"}
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
          onClick={addEducation}
        />
      </div>
      <div className="all-education-divs">
        {userContent.education.map((item) => {
          return (
            <div className="education-div" key={item.id}>
              <Input
                onChange={(e) =>
                  handleEducationInputChange(
                    item.id,
                    e.target.value,
                    "educationPlace"
                  )
                }
                placeholder="Education place"
                style={{ fontSize: "25px" }}
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange(item.id, e.target.value, "date")
                }
                placeholder="Data"
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange(item.id, e.target.value, "gpa")
                }
                placeholder="GPA"
              />

              <Input
                onChange={(e) =>
                  handleEducationInputChange(item.id, e.target.value, "courses")
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
          onClick={addJob}
        />
      </div>

      <div className="job-divs">
        {userContent.job.map((item) => {
          return (
            <div className="job-inputes" key={item.id}>
              <Input
                onChange={(e) =>
                  handleJobInputChange(item.id, e.target.value, "companyName")
                }
                placeholder="Company Name"
              />

              <Input
                onChange={(e) =>
                  handleJobInputChange(item.id, e.target.value, "date")
                }
                placeholder="Date"
              />

              <Input
                onChange={(e) =>
                  handleJobInputChange(item.id, e.target.value, "description")
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
