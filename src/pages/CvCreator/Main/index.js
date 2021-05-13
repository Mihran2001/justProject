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
    // job: [],
  });

  console.log(userContent);
  // console.log(startDate);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addInput = () => {
    setUserContent((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: uuid(), educationPlace: "", date: "", gpa: "", courses: "" },
      ],
    }));
  };

  const handleInputChange = (id, value, field) => {
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

  console.log(userContent.name);

  return (
    <div className="main-part">
      <div className="header">
        <div className="about-user" onClick={showModal}>
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
        onOk={handleOk}
        onCancel={handleCancel}
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
          onClick={addInput}
        />
      </div>
      <div className="all-education-divs">
        {userContent.education.map((item) => {
          return (
            <div className="education-div">
              <Input
                key={item.id}
                onChange={(e) =>
                  handleInputChange(item.id, e.target.value, "educationPlace")
                }
                placeholder="Education place"
                style={{ fontSize: "25px" }}
              />

              <Input
                key={item.id}
                onChange={(e) =>
                  handleInputChange(item.id, e.target.value, "date")
                }
                placeholder="Data"
              />

              <Input
                key={item.id}
                onChange={(e) =>
                  handleInputChange(item.id, e.target.value, "gpm")
                }
                placeholder="GPM"
              />

              <Input
                key={item.id}
                onChange={(e) =>
                  handleInputChange(item.id, e.target.value, "courses")
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
          onClick={addInput}
        />
      </div>
    </div>
  );
}
