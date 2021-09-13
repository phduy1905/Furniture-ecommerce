import React from "react";
import { Button } from "./SecondaryButton.styles";

const SecondaryButton = (props) => {
  return <Button>{props.children}</Button>;
};

export default SecondaryButton;
