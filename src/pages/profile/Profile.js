import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function Profile() {
  const [theme, setTheme] = useState("ligth");

  const themToggler = () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };
  return <button onClick={() => themToggler()}>Profile</button>;
}
