import React from "react";
import { node, oneOf, string, oneOfType } from "prop-types";
import { Typography as MuiTypography } from "@material-ui/core";

export const variantMappings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "body1",
  bodySmall: "caption",
  bodyLarge: "body2",
  button: "button",
};

const Typography = ({ children, variant }) => (
  <MuiTypography variant={variantMappings[variant]}>{children}</MuiTypography>
);

Typography.propTypes = {
  children: oneOfType([node, string]).isRequired,
  variant: oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body",
    "bodySmall",
    "bodyLarge",
    "button",
  ]),
};

Typography.defaultProps = {
  variant: "body",
};

export default Typography;
