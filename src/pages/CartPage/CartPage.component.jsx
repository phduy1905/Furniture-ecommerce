import React from "react";
import {
  EmptyContainer,
  FillLink,
  Container,
  Wrapper,
  CartHeader,
  Back,
  ClearCartButton,
  CartContainer,
  TotalContainer,
  TotalRow,
  Button,
} from "./CartPage.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { CartItem } from "../../components";
import { formatNumber } from "../../utils/helpers";
import { useCartContext } from "../../context/cart_context";
import { useHistory } from "react-router";

const CartPage = () => {
  const history = useHistory();
  const { cart, clearCart, total_items, total_amount, shipping_fee } =
    useCartContext();

  if (cart.length === 0) {
    return (
      <EmptyContainer>
        <h1>Your cart is empty :( </h1>
        <FillLink to="/products">Fill it now</FillLink>
      </EmptyContainer>
    );
  }
  return (
    <Container>
      <Wrapper>
        <CartHeader>
          <Back to="/products">
            <ArrowBackIosIcon />
            <h3>Continue shopping</h3>
          </Back>
          <span>Cart</span>
          <ClearCartButton onClick={clearCart}>
            <h3>Clear cart</h3>
            <DeleteOutlineIcon />
          </ClearCartButton>
        </CartHeader>
        <CartContainer>
          {cart.map((item) => {
            const { id } = item;
            return <CartItem key={id} {...item} cart={cart} />;
          })}
        </CartContainer>
        <TotalContainer>
          <TotalRow>
            <p>Subtotal: </p>
            <span>{formatNumber(total_amount)}</span>
          </TotalRow>
          <TotalRow>
            <p>Shipping Fee: </p>
            <span>{formatNumber(shipping_fee)}</span>
          </TotalRow>
          <hr />
          <TotalRow>
            <p>Order Total: </p>
            <span>{formatNumber(total_amount + shipping_fee)}</span>
          </TotalRow>
          <Button onClick={() => history.push("/signin")}>
            Log in to checkout
          </Button>
        </TotalContainer>
      </Wrapper>
    </Container>
  );
};

export default CartPage;
