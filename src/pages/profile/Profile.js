// import React, { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

// export default function Profile() {
//   const [theme, setTheme] = useState("ligth");

//   const themToggler = () => {
//     theme === "ligth" ? setTheme("dark") : setTheme("ligth");
//   };
//   return <button onClick={() => themToggler()}>Profile</button>;
// }

import React from "react";
import "./style.less";
import "antd/dist/antd.less";

import Sidebar from "./sidebar/Sidebar";
import UserContent from "./userContent.js/UserContent";

export default function Profile() {
  return (
    <div className="main">
      <div className="userPorfile">
        <Sidebar />
        <UserContent />
      </div>
    </div>
  );
}
