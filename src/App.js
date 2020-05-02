import React, { useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactGa from "react-ga";
import {Router} from "./components/";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function App() {
  useEffect(() => {
    ReactGa.initialize("UA-165250041-1");
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router></Router>
      </ThemeProvider>
    </React.Fragment>
  );
}
