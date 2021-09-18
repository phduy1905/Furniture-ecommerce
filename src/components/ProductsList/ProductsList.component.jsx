import React from "react";
import { Container, LoadingContainer } from "./ProductsList.styles";
import { useFilterContext } from "../../context/filter_context";
import { GridView, ListView, Loading, Pagination } from "../../components";
import { paginate } from "../../utils/helpers";
import { useState, useEffect } from "react";

export const ProductsList = () => {
  let {
    filtered_products: products,
    productsPerPage,
    gridView,
    isLoading,
  } = useFilterContext();
  products = paginate(products);

  const [page, setPage] = useState(0);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    setProductsList(productsPerPage[page]);
  }, [isLoading, page, products]);

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  if (products.length < 1 || !products) {
    return (
      <LoadingContainer>
        <h1>Sorry, no products matched your search :(</h1>
      </LoadingContainer>
    );
  }
  if (gridView) {
    return (
      <Container view="grid">
        <GridView products={productsList} loading={isLoading} />
        <Pagination
          setPage={setPage}
          page={page}
          products={products}
          handlePage={handlePage}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <ListView products={productsList} loading={isLoading} />
        <Pagination
          setPage={setPage}
          page={page}
          products={products}
          handlePage={handlePage}
        />
      </Container>
    );
  }
};
