import { Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

export const StyledHeader = styled.header`
  display: flex;
  height: 300px;
  width: 100%;
  background-color: rgb(24, 52, 71);
  border-radius: 15px 15px 0 0;
`;

export const NameSurnameDescription = styled.div`
  width: 70%;
  margin: 40px;
`;

export const NameSurname = styled(Input)`
  width: 400px;
  border: none;
  outline: none;
  background-color: #183447;
  color: white;
  font-size: 30px;
`;

export const Proffesion = styled(Input)`
  width: 400px;
  border: none;
  outline: none;
  background-color: rgb(24, 52, 71);
  color: white;
  font-size: 17px;
`;

export const Textarea = styled(TextArea)`
  margin: 20px 10px 0px 0px;
  width: 95%;
  color: white;
  background: rgb(24, 52, 71);
  border: none;
  outline: none;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Contacts = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  background: red;
  background: rgb(8 26 39);
`;

export const ContactsLeftPart = styled.div`
  width: 50%;
`;

export const ContactsRightPart = styled.div`
  width: 50%;
`;
