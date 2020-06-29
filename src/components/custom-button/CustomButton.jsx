import React from "react";

import { CustomButtonStyle } from "./custombutton.styled";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonStyle {...props}>{children}</CustomButtonStyle>
);

export default CustomButton;
