import React, { useEffect, useState } from "react";
import { Container } from "./GridView.styles";
import { ProductCard } from "..";

export const GridView = ({ products }) => {
  return (
    <Container>
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Container>
  );
};
