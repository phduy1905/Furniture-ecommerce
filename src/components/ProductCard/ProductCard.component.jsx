import React from "react";
import {
  Container,
  ImgContainer,
  Img,
  Footer,
  Name,
  Price,
  View,
} from "./ProductCard.styles";
import { formatNumber } from "../../utils/helpers";

export const ProductCard = ({ product }) => {
  const { id, image, name, price } = product;
  return (
    <Container>
      <ImgContainer>
        <Img src={image} />
        <View to={`/products/${id}`}>view details</View>
      </ImgContainer>
      <Footer>
        <Name>{name}</Name>
        <Price>{formatNumber(price)}</Price>
      </Footer>
    </Container>
  );
};
