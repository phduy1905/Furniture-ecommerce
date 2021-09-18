import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  padding: 6rem 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  ${tablet({ flexDirection: "column" })}
`;

export const Text = styled.div`
  flex-basis: 60%;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 8rem;
    height: 2px;
    background-color: #d1d1d1;
    left: 0;
    bottom: -1rem;
  }
`;

export const Desc = styled.p`
  color: var(--text-color);
  font-size: 1.2rem;

  ${tablet({ marginBottom: "var(--mb-1-5)" })}
`;
