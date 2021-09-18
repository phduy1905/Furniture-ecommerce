import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */
`;

export const LoadingContainer = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

export const ButtonSide = styled.button`
  background: none;
  font-weight: 700;
  color: #63bbe6;
  text-transform: lowercase;
  border: none;
  cursor: pointer;
  font-size: var(--h3-font-size);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover {
    opacity: 0.6;
  }
`;
