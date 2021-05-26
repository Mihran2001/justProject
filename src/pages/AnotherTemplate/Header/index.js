import React from "react";
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

export default function Header() {
  return (
    <>
      <StyledHeader>
        <NameSurnameDescription>
          <NameSurname placeholder="Name Surname" />
          <Proffesion placeholder="Profession" />
          <Textarea rows={5} placeholder="About You" />
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
          />
          <ContactInputs
            icon={<LinkedinOutlined style={{ color: "white" }} />}
            placeholder="Input Your LinkedIn"
          />
          <ContactInputs
            icon={<GlobalOutlined style={{ color: "white" }} />}
            placeholder="Input Your Location"
          />
        </ContactsLeftPart>

        <ContactsRightPart>
          <ContactInputs
            icon={<MobileOutlined style={{ color: "white" }} />}
            placeholder="Input Your Phone Number"
          />
          <ContactInputs
            icon={<TwitterOutlined style={{ color: "white" }} />}
            placeholder="Input Your Twiter"
          />
          <ContactInputs
            icon={<InstagramOutlined style={{ color: "white" }} />}
            placeholder="Input Your Instagram"
          />
        </ContactsRightPart>
      </Contacts>
    </>
  );
}
