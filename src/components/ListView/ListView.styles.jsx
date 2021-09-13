import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 1rem;
`;

export const ProductItem = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: var(--mb-1);
  align-items: center;
`;

export const Img = styled.img`
  height: 200px;
  min-width: 300px;
  /* width: 100%; */
  object-fit: cover;
`;

export const ProductInfo = styled.div``;

export const Name = styled.h3`
  text-transform: capitalize;
`;

export const Price = styled.span``;

export const Desc = styled.p`
  margin-top: var(--mb-1);
`;

export const Button = styled(Link)`
  text-decoration: none;
  background-color: #f67c8c;
  color: #fff;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
