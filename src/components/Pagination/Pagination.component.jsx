import React from "react";
import { Container, PaginationButtons, SideButton } from "./Pagination.styles";

export const Pagination = ({ products, handlePage, page, setPage }) => {
  return (
    <Container>
      <SideButton
        disabled={page === 0 && true}
        side="left"
        onClick={() => setPage(page - 1)}
      >
        Prev
      </SideButton>
      <PaginationButtons>
        {products.map((product, index) => {
          return (
            <button
              className={index === page ? "active" : ""}
              key={index}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </PaginationButtons>
      <SideButton
        disabled={page === products.length - 1 && true}
        side="right"
        onClick={() => setPage(page + 1)}
      >
        Next
      </SideButton>
    </Container>
  );
};
