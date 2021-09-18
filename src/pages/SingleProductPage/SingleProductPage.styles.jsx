import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  margin-top: var(--header-height);
  max-width: 1140px;
  padding: 0rem 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 6rem 1rem;

  ${tablet({ padding: "0rem 1rem 2rem 1rem" })}

  .back {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: var(--mb-1-5);
    color: #bbb;

    svg {
      font-size: 1rem;
    }

    &:hover {
      color: #aaa;
      font-weight: 700;
    }
  }
`;

export const LoadingContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 4rem;
  ${tablet({ gridTemplateColumns: "1fr", rowGap: "3rem" })}
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  ${tablet({ rowGap: "1rem" })}

  span {
    font-weight: 700;
  }

  hr {
    height: 1px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
`;

export const Price = styled.span`
  font-size: var(--h2-font-size);
  font-weight: 700;
  letter-spacing: 3px;
  color: #ff7777;
`;

export const Description = styled.p`
  letter-spacing: 0.5px;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`;
