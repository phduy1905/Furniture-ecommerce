import React from "react";
import { useHistory } from "react-router";
import { Button } from "./SecondaryButton.styles";

const SecondaryButton = (props) => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push(`${props.url}`)}>
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
