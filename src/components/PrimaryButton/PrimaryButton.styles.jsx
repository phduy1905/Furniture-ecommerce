import styled from "styled-components";

export const Button = styled.button`
  background-color: #fc4a24;
  text-transform: uppercase;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s;

  &::after {
    background-color: #fd9d89;
    height: 100%;
    left: -45%;
    top: 0;
    transform: skew(50deg);
    transition-duration: 0.6s;
    transform-origin: top left;
    width: 0;
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    transform: scale(1);
  }

  &:hover::after {
    height: 100%;
    width: 145%;
  }
`;
