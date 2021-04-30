import React from "react";
import "antd/dist/antd.less";
import { UserAddOutlined } from "@ant-design/icons";
import "./content.less";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function UserContent() {
  return (
    <div className="user-content">
      <div className="content-header">
        <h3> Personal Profile </h3>
        <p> Manage your Personal and Account information </p>
      </div>
      <div className="change-contacts">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ display: "flex" }}
        >
          <UserAddOutlined className="add-photo" style={{ fontSize: "50px" }} />
          <div className="name-email">
            <h6 style={{ marginLeft: "20px" }}> Name </h6>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              style={{ width: "80%", marginLeft: "20px", width: "500px" }}
            >
              <Input />
            </Form.Item>

            <h6 style={{ marginLeft: "20px" }}> Email </h6>
            <Row>
              {/* <Col span={18}> */}
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                style={{ width: "50%", marginLeft: "20px", width: "360px" }}
              >
                <Input.Password />
              </Form.Item>
              {/* </Col> */}

              {/* <Col span={6}> */}
              <Form.Item {...tailLayout} style={{ marginLeft: "-135px" }}>
                <Button type="primary" htmlType="submit">
                  Change
                </Button>
              </Form.Item>
              {/* </Col> */}
            </Row>
          </div>
        </Form>
        <div className="profile-footer">
          <div className="active-date">
            <p style={{ fontSize: "small", color: "black" }}>
              {" "}
              Your account will be activ untill Desember 26, 2021
            </p>
          </div>
          <Button size="large" type="primary">
            Primary Button
          </Button>
        </div>
      </div>
    </div>
  );
}
