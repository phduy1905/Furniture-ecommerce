import React from "react";
import { Container, Right, FilterSide } from "./ProductsPage.styled";
import { Sort, Filter, ProductsList } from "../../components";

export const ProductsPage = () => {
  return (
    <Container>
      <FilterSide />
      <Filter />
      <Right>
        <Sort />
        <ProductsList />
      </Right>
    </Container>
  );
};
