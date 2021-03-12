import { createMuiTheme } from '@material-ui/core';

import colours from './colours';

import { MuiButton } from './overrides';

const poppinsFont = 'Poppins, Arial, sans-serif';
const robotoFont = 'Roboto, Helvetica, sans-serif';
const bold = 700;
const semiBold = 600;
const regular = 400;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colours.andBlue,
    },
    secondary: {
      main: colours.andRed,
    },
    text: {
      main: colours.charcoalGrey,
    },
    error: {
      main: colours.andRed,
    },
    warning: {
      main: colours.articlesYellow,
    },
    info: {
      main: colours.andBlue,
    },
    success: {
      main: colours.buildGreen,
    },
    background: {
      default: colours.lightBackground,
      paper: colours.white,
    },
  },
  typography: {
    h1: {
      fontFamily: poppinsFont,
      fontWeight: bold,
      fontSize: '2.875rem',
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: poppinsFont,
      fontWeight: bold,
      fontSize: '2.375rem',
      lineHeight: 1.21,
    },
    h3: {
      fontFamily: poppinsFont,
      fontWeight: bold,
      fontSize: '1.875rem',
      lineHeight: 1.26,
    },
    h4: {
      fontFamily: poppinsFont,
      fontWeight: bold,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    h5: {
      fontFamily: poppinsFont,
      fontWeight: semiBold,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: poppinsFont,
      fontWeight: semiBold,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    // waiting for Material UI V5 to customise typography variant names
    // normal
    body1: {
      fontFamily: robotoFont,
      fontWeight: regular,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    // large
    body2: {
      fontFamily: robotoFont,
      fontWeight: regular,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    // body small
    caption: {
      fontFamily: robotoFont,
      fontWeight: regular,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    button: {
      fontFamily: robotoFont,
      fontWeight: bold,
      fontSize: '1rem',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    // TO DO: small button
    overline: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
  overrides: {
    ...MuiButton,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
