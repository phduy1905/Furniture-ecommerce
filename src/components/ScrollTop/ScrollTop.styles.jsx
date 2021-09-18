import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 50px;
  width: 50px;
  background-color: red;
  z-index: 3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform: translateY(6rem);
  svg {
    font-size: 2rem;
    fill: #fff;
  }

  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  &.active {
    transform: translateY(0rem);
  }
`;
