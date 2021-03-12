import React from 'react';
import { node, string, oneOfType } from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';

const Button = ({ children }) => (
  <MuiButton variant="contained" color="primary">
    {children}
  </MuiButton>
);

Button.propTypes = {
  children: oneOfType([node, string]).isRequired,
};

export default Button;
