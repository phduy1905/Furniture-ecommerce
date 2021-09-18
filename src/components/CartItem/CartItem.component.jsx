import React from "react";
import {
  ItemRemove,
  ItemImgContainer,
  ItemImg,
  ItemInfo,
  Color,
  Name,
  Price,
  Quantity,
  Amount,
  Subtotal,
  CartItemContainer,
} from "./CartItem.styles";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { formatNumber } from "../../utils/helpers";
import { useCartContext } from "../../context/cart_context";

export const CartItem = ({ id, color, amount, image, max, name, price }) => {
  const { toggleCartItemAmount, removeCartItem } = useCartContext();

  const increase = () => {
    toggleCartItemAmount(id, color, max, "increase");
  };

  const decrease = () => {
    toggleCartItemAmount(id, color, max, "decrease");
  };

  return (
    <CartItemContainer>
      <ItemRemove onClick={() => removeCartItem(id)}>
        <CloseIcon />
      </ItemRemove>
      <ItemImgContainer>
        <ItemImg src={image} />
      </ItemImgContainer>
      <ItemInfo>
        <Name>
          {name}
          <Color>
            Color: <span style={{ background: `${color}` }}></span>
          </Color>
        </Name>
        <Price>{formatNumber(price)}</Price>
        <Quantity>
          <button
            style={{ background: "#D7D7D7", color: "#000" }}
            onClick={decrease}
          >
            <RemoveIcon />
          </button>
          <Amount>{amount}</Amount>
          <button
            style={{ background: "#4A4B7C", color: "#fff" }}
            onClick={increase}
          >
            <AddIcon />
          </button>
        </Quantity>
        <Subtotal>{formatNumber(amount * price)}</Subtotal>
      </ItemInfo>
    </CartItemContainer>
  );
};
