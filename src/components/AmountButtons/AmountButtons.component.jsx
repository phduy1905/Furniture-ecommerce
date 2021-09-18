import React from "react";
import { Container } from "./AmountButtons.styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const AmountButtons = ({ amount, increase, decrease, stock }) => {
  return (
    <Container>
      <button
        onClick={() => {
          decrease();
        }}
        disabled={amount === 1 && true}
      >
        <RemoveIcon />
      </button>
      <h2>{amount}</h2>
      <button
        onClick={() => {
          increase();
        }}
        disabled={amount >= stock && true}
      >
        <AddIcon />
      </button>
    </Container>
  );
};
