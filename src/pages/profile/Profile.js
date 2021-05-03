import React, { useContext } from "react";
import "./style.less";
import "antd/dist/antd.less";

import Sidebar from "./sidebar/Sidebar";
import UserContent from "./userContent.js/UserContent";
import { ModeContext } from "../../providers/ModeProvider";
import styled, { ThemeProvider } from "styled-components";
import { ligthTheme, darkTheme, GlobalStyles } from "./Themes.js";

export const ThemeModes = {
  DARK_MODE: "dark",
  LIGHT_MODE: "light",
};

export default function Profile() {
  const { mode } = useContext(ModeContext);
  return (
    <ThemeProvider
      theme={mode === ThemeModes.LIGHT_MODE ? ligthTheme : darkTheme}
    >
      <GlobalStyles />
      <div className="main">
        <div className="userPorfile">
          <Sidebar />
          <UserContent />
        </div>
      </div>
    </ThemeProvider>
  );
}
