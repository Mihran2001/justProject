import { createGlobalStyle } from "styled-components";

export const ligthTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "#000",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

`;
