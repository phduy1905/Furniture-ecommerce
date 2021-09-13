import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

export const PaginationButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  button {
    background: none;
    border: none;
    height: 40px;
    width: 40px;
    font-size: var(--h3-font-size);
    color: #949aa7;
    font-weight: 700;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: #ff758c;
      color: #fff;
    }
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const SideButton = styled.button`
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
