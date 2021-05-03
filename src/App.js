import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import { useAuthProviderState } from "./providers/AuthProvider";
import Router from "./Router";
import ModeProvider from "./providers/ModeProvider";

const Main = styled.main`
  min-height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
      <GlobalStyle />
      <Main>
        <ModeProvider>
          <Router />
        </ModeProvider>
      </Main>
    </ThemeProvider>
  );
}

export default App;
