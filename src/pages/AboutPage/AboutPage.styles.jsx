import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  margin-top: var(--header-height);
  padding: 6rem 1rem;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  ${tablet({ gridTemplateColumns: "1fr", padding: "2rem 1rem" })}
`;

export const Left = styled.div`
  height: 600px;
  width: 100%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Right = styled.div``;

export const Title = styled.h1`
  font-size: var(--bigger-font-size);
  text-transform: capitalize;
  position: relative;
  margin-bottom: var(--mb-2-5);
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 20%;
    background-color: #e74c3c;
    color: var(--title-color);
  }
`;

export const Text = styled.p`
  color: #7f8c8d;
  letter-spacing: 1px;
  line-height: 1.6;
`;
