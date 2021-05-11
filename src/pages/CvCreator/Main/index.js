import React, { useState } from "react";
import "./style.less";
import { Input } from "antd";
import { Modal, Button } from "antd";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [userContent, setUserContent] = useState({
    name: "Name",
    surName: "Surname",
    profession: "",
    bool: false,
  });

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
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
