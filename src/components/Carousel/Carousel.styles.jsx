import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 6rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 40px;
`;

export const Button = styled.button`
  width: 40px;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  &:nth-child(1) {
    &::after {
      content: "";
      width: calc(100% + 20px);
      height: 2px;
      background-color: #ddd;
      position: absolute;
      bottom: -5px;
      left: -10px;
    }
  }
`;
