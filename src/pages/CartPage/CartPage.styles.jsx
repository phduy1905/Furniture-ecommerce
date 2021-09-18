import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const EmptyContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FillLink = styled(Link)`
  display: inline-block;
  background-color: #f1a311;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  margin-top: var(--mb-2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  padding-top: var(--header-height);
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  padding: 6rem 0;

  ${mobile({ padding: "2rem 0" })}
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--mb-2);
  span {
    font-size: var(--h2-font-size);
  }

  h3 {
    ${mobile({ display: "none" })}
  }
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--title-color);
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  ${mobile({ padding: "1rem" })}
  svg {
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ClearCartButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: #4a4b7c;
  color: #fff;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  &:hover {
    opacity: 0.7;
  }
`;

export const CartContainer = styled.div``;

export const TotalContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  padding: 2rem;
  border: 1px solid #7f8fa6;
  border-radius: 20px;

  ${mobile({ margin: "0 auto" })}
`;

export const TotalRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 180px 1fr;
  margin-bottom: var(--mb-1);

  p {
    color: #718093;
  }

  span {
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  margin-top: var(--mb-2);
  background: #f1a311;
  color: #fff;
  width: 100%;
  border-radius: 30px;
  border: none;

  font-weight: 700;
  font-size: var(--normal-font-size);
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;
