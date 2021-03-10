import React from 'react';
import { node } from 'prop-types';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  NoSsr,
} from '@material-ui/core';
import theme from './theme/theme';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <NoSsr>{children}</NoSsr>
    </CssBaseline>
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
