import React, { useState } from "react";
import {
  Container,
  ColorsContainer,
  ColorButton,
  CartButton,
} from "./AddToCart.styles";
import { AmountButtons } from "..";
import { useHistory } from "react-router";
import CheckIcon from "@material-ui/icons/Check";

export const AddToCart = ({ colors = [], stock, addToCart, id, product }) => {
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);
  const history = useHistory();
  const increase = () => {
    let newAmount = amount + 1;

    setAmount(newAmount);
  };

  const decrease = () => {
    let newAmount = amount - 1;
    if (newAmount < 1) {
      newAmount = 1;
    }
    setAmount(newAmount);
  };

  return (
    <Container>
      <ColorsContainer>
        <span>Colors:</span>
        {colors.map((color, idx) => {
          return (
            <ColorButton
              key={idx}
              style={{ backgroundColor: `${color}` }}
              className={`${color === mainColor ? "active" : ""}`}
              onClick={() => setMainColor(color)}
            >
              {color === mainColor ? <CheckIcon /> : ""}
            </ColorButton>
          );
        })}
      </ColorsContainer>
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
        stock={stock}
      />
      <CartButton
        onClick={() => {
          history.push("/cart");
          addToCart(id, mainColor, amount, product);
        }}
        disabled={stock === 0 && true}
      >
        Add to Cart
      </CartButton>
    </Container>
  );
};
