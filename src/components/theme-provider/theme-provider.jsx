import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  NoSsr,
} from "@material-ui/core";
import theme from "./theme/theme";

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <NoSsr>{children}</NoSsr>
    </CssBaseline>
  </MuiThemeProvider>
);

export default ThemeProvider;
