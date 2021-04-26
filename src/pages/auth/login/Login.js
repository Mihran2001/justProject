import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import {loginAxios} from '../../api/api'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Register = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);
    const data = await loginAxios(values)
    console.log(data)
    if (data.message === 'logined successfuly') {
      localStorage.setItem("access_token", data.token)
      history.push('/profile')
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <NavLink to="/auth/register">register now!</NavLink>
      </Form.Item>
    </Form>
    </Wrapper>
  );
};

export default Register;
