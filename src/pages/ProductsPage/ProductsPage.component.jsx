import React from "react";
import { Container, Right, FilterSide } from "./ProductsPage.styled";
import { Sort, Filter, ProductsList, FilterMobile } from "../../components";

export const ProductsPage = () => {
  return (
    <Container>
      <FilterSide />
      <Filter />
      <FilterMobile />
      <Right>
        <Sort />
        <ProductsList />
      </Right>
    </Container>
  );
};
