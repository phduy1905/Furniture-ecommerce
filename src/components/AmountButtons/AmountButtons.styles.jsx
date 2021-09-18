import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  h2 {
    font-size: 2.5rem;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.6;
    }

    &:disabled {
      cursor: not-allowed;
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;
