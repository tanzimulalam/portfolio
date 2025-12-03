import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
          <MusicPlayer theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
