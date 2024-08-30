import { Box, Button, Container } from "@mui/material";
import LeftBar from "./Components/LeftBar";
import RightBar from "./Components/RightBar";
import Content from "./Components/Content";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  function onMode() {
    setMode((mode) => (mode == "dark" ? "light" : "dark"));
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className="grid grid-cols-10   ">
        <LeftBar onMode={onMode} />
        <Content />
        <RightBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
