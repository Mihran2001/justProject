import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import { useAuthProviderState } from "./providers/AuthProvider";
import Router from "./Router";

const Main = styled.main`
  min-height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
      <GlobalStyle />
      <Main>
        <Router />
      </Main>
    </ThemeProvider>
  );
}

export default App;
