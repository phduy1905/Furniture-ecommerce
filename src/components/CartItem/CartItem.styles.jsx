import styled from "styled-components";
import { mobile } from "../../responsive";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 150px 1fr;
  grid-gap: 2rem;
  align-items: center;
  /* background-color: #f5f6fa;
  padding: 2rem; */
  border-radius: 5px;
  margin-bottom: 2rem;

  ${mobile({
    gridTemplateColumns: "20px 150px 1fr",
    padding: "1rem",
    gridGap: "2rem",
  })}

  @media screen and (max-width: 420px) {
    grid-template-columns: 20px 100px 1fr;
    grid-gap: 1.5rem;
  }
`;

export const ItemRemove = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImgContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 420px) {
    height: 100px;
    width: 100px;
  }
`;

export const ItemImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  font-size: var(--h3-font-size);
  height: 100%;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

export const Name = styled.h4`
  font-weight: 300;
  display: flex;
  flex-direction: column;
`;

export const Color = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-weight: 500;
  span {
    height: 15px;
    width: 15px;
    display: inline-block;
    border-radius: 5px;
  }
`;

export const Price = styled.p`
  font-weight: 600;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  height: 100%;
  button {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    height: 35px;
    width: 35px;
  }

  ${mobile({ columnGap: "0.5rem" })}
`;

export const Amount = styled.span``;

export const Subtotal = styled.p`
  font-weight: 600;
  color: #192a56;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
