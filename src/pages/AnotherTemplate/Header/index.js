import React, { createContext, useReducer } from "react";
import ImgInput from "./ImgInput";
import ContactInputs from "./ContactInputs";
import {
  MailOutlined,
  MobileOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import {
  StyledHeader,
  NameSurnameDescription,
  NameSurname,
  Textarea,
  Proffesion,
  ImgDiv,
  Contacts,
  ContactsLeftPart,
  ContactsRightPart,
} from "./styled";

export const Context = createContext({});

export const InputNames = {
  NAME: "NAME",
  PROFESSION: "PROFESSION",
  ABOUTYOU: "ABOUTYOU",
  EMAIL: "EMAIL",
  LINKEDIN: "LINKEDIN",
  LOCATION: "LOCATION",
  NUMBER: "NUMBER",
  TWITER: "TWITER",
  INSTA: "INSTA",
};

const reducer = (state, action) => {
  if (action.type === InputNames.NAME) {
    return {
      ...state,
      nameSurName: action.value,
    };
  } else if (action.type === InputNames.PROFESSION) {
    return {
      ...state,
      profession: action.value,
    };
  } else if (action.type === InputNames.ABOUTYOU) {
    return {
      ...state,
      aboutYou: action.value,
    };
  } else if (action.type === InputNames.EMAIL) {
    return {
      ...state,
      email: action.value,
    };
  } else if (action.type === InputNames.LINKEDIN) {
    return {
      ...state,
      linkedIn: action.value,
    };
  } else if (action.type === InputNames.LOCATION) {
    return {
      ...state,
      location: action.value,
    };
  } else if (action.type === InputNames.NUMBER) {
    return {
      ...state,
      number: action.value,
    };
  } else if (action.type === InputNames.TWITER) {
    return {
      ...state,
      twiter: action.value,
    };
  } else if (action.type === InputNames.INSTA) {
    return {
      ...state,
      insta: action.value,
    };
  }
};

export default function Header() {
  const [state, dispatch] = useReducer(reducer, {
    nameSurName: "",
    profession: "",
    aboutYou: "",
    email: "",
    linkedIn: "",
    location: "",
    number: "",
    twiter: "",
    insta: "",
  });

  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <>
        <StyledHeader>
          <NameSurnameDescription>
            <NameSurname
              placeholder="Name Surname"
              onChange={(e) =>
                dispatch({ type: InputNames.NAME, value: e.target.value })
              }
            />
            <Proffesion
              placeholder="Profession"
              onChange={(e) =>
                dispatch({ type: InputNames.PROFESSION, value: e.target.value })
              }
            />
            <Textarea
              rows={5}
              placeholder="About You"
              onChange={(e) =>
                dispatch({ type: InputNames.ABOUTYOU, value: e.target.value })
              }
            />
          </NameSurnameDescription>
          <ImgDiv>
            <ImgInput />
          </ImgDiv>
        </StyledHeader>
        <Contacts>
          <ContactsLeftPart>
            <ContactInputs
              icon={<MailOutlined style={{ color: "white" }} />}
              placeholder="Input Your Email"
              onChange={(e) =>
                dispatch({ type: InputNames.EMAIL, value: e.target.value })
              }
            />
            <ContactInputs
              icon={<LinkedinOutlined style={{ color: "white" }} />}
              placeholder="Input Your LinkedIn"
              onChange={(e) =>
                dispatch({ type: InputNames.LINKEDIN, value: e.target.value })
              }
            />
            <ContactInputs
              icon={<GlobalOutlined style={{ color: "white" }} />}
              placeholder="Input Your Location"
              onChange={(e) =>
                dispatch({ type: InputNames.LOCATION, value: e.target.value })
              }
            />
          </ContactsLeftPart>

          <ContactsRightPart>
            <ContactInputs
              icon={<MobileOutlined style={{ color: "white" }} />}
              placeholder="Input Your Phone Number"
              onChange={(e) =>
                dispatch({ type: InputNames.NUMBER, value: e.target.value })
              }
            />
            <ContactInputs
              icon={<TwitterOutlined style={{ color: "white" }} />}
              placeholder="Input Your Twiter"
              onChange={(e) =>
                dispatch({ type: InputNames.TWITER, value: e.target.value })
              }
            />
            <ContactInputs
              icon={<InstagramOutlined style={{ color: "white" }} />}
              placeholder="Input Your Instagram"
              onChange={(e) =>
                dispatch({ type: InputNames.INSTA, value: e.target.value })
              }
            />
          </ContactsRightPart>
        </Contacts>
      </>
    </Context.Provider>
  );
}
