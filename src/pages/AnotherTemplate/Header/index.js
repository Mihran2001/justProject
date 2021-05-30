import React, { useContext } from "react";
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

import { Context } from "../Provider";
import { InputNames } from "../Provider";

export default function Header() {
  const { state, dispatch } = useContext(Context);

  // console.log(state);
  return (
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
  );
}
