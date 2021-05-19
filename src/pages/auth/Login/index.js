import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { loginAxios } from "../../Api";
import {
  useAuthDispatch,
  useAuthProviderState,
} from "../../../providers/AuthProvider";
import LoginUsingGmail from "./LoginUsingGmail";
import "./style.less";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Login = () => {
  const history = useHistory();
  const { login } = useAuthDispatch();
  const { isAuth } = useAuthProviderState();
  const location = useLocation();
  console.log("location is", location);

  useEffect(() => {
    if (isAuth) {
      const { from } = location.state || { from: { pathname: "/profile/cv" } };
      history.replace(from.pathname);
    }
  }, [isAuth]);

  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);
    if (await login(values)) {
      history.replace("/profile/cv");
    }
  };

  return (
    <Wrapper>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <NavLink to="/auth/register">register now!</NavLink>
        </Form.Item>
        <LoginUsingGmail />
      </Form>
    </Wrapper>
  );
};

export default Login;
