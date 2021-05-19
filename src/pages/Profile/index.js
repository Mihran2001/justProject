import React, { useContext } from "react";
import "./style.less";
import "antd/dist/antd.less";

import Sidebar from "./Sidebar/index";
import UserContent from "./UserContent.js/index";
import { ModeContext } from "../../providers/ModeProvider";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Sidebar/Themes.js";
import Header from "./Header/index";

export const ThemeModes = {
  DARK_MODE: "dark",
  LIGHT_MODE: "light",
};

export default function Profile() {
  const { mode } = useContext(ModeContext);
  return (
    <ThemeProvider
      theme={mode === ThemeModes.LIGHT_MODE ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <div className="main">
        <div className="userPorfile">
          <Header />
          <Sidebar />
          <UserContent />
        </div>
      </div>
    </ThemeProvider>
  );
}
