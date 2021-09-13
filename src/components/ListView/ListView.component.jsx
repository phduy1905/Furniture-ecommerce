import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ProductItem,
  Img,
  ProductInfo,
  Name,
  Price,
  Desc,
  Button,
} from "./ListView.styles";
import { formatNumber } from "../../utils/helpers";

export const ListView = ({ products }) => {
  return (
    <Container>
      {products?.map((product) => {
        const { id, name, price, description, image } = product;
        return (
          <ProductItem key={id}>
            <Img src={image} alt={name} />
            <ProductInfo>
              <Name>{name}</Name>
              <Price>{formatNumber(price)}</Price>
              <Desc>{description.substring(0, 150) + "..."}</Desc>
              <Button to={`/products/:${id}`}>view details</Button>
            </ProductInfo>
          </ProductItem>
        );
      })}
    </Container>
  );
};
