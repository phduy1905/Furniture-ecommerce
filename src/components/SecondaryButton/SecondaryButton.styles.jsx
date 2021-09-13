import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 18px;
  color: #aaa;
  border: 1px solid #ccc;
  text-transform: lowercase;
  background: transparent;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    top: -5px;
    right: -5px;
  }
`;
