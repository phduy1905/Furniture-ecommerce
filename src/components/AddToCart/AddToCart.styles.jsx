import styled from "styled-components";

export const Container = styled.div``;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-0-5);
  span {
    margin-right: var(--mb-2);
  }
`;

export const ColorButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: var(--mb-1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  svg {
    color: #fff;
    font-weight: 700;
  }

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const CartButton = styled.button`
  padding: 1rem 2rem;
  background-color: #ff7777;
  color: #fff;
  font-size: var(--h3-font-size);
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: var(--mb-1);
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;

    &:hover {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;
