import React, { useState } from "react";
import "./style.less";
import { Modal, Button, Input } from "antd";
import InputForm from "./InputForms";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import UserSelects from "./UserSelects";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userContent, setUserContent] = useState({
    name: "Name",
    surName: "Surname",
    profession: "",
    bool: false,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="main-part">
      <div className="header">
        <div className="about-user" onClick={showModal}>
          <h1>
            {" "}
            {userContent.name} {userContent.surName}{" "}
          </h1>
        </div>

        <Input
          placeholder="Profession"
          style={{ width: "300px", marginLeft: "20px" }}
          className="profession-input"
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
            icon={<UserOutlined style={{ fontSize: "20px" }} />}
          />
          <InputForm
            setPlaceholder={"Family Name"}
            icon={<TeamOutlined style={{ fontSize: "20px" }} />}
          />
        </div>
        <UserSelects />
        <div className="allSelects"></div>
      </Modal>
    </div>
  );
}
