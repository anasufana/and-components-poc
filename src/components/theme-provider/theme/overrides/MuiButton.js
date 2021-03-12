import colours from '../colours';

export default {
  MuiButton: {
    contained: {
      borderRadius: '30px',
      height: '60px',
      padding: '0',
      boxShadow: 'none',
      border: `2px solid currentColor`,
      '&:hover': {
        boxShadow: `1px 2px 5px 0px ${colours.charcoalGrey}33`,
      },
      '&:active': {
        boxShadow: 'none',
      },
      '& > $label': {
        padding: '0 22px',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: colours.white,
        color: colours.andBlue,
      },
      '&:active': {
        backgroundColor: colours.white,
        color: colours.andBlue,
      },
    },
  },
};
