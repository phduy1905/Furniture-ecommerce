import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 300px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const View = styled(Link)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #fff;
  text-decoration: none;
  font-size: var(--h3-font-size);
  border: 1px solid #fff;
  padding: 0.5rem;
  display: none;
`;

export const ImgContainer = styled.div`
  height: 250px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
    pointer-events: visible;
  }

  &:hover ${View} {
    display: block;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  height: 50px;
`;
export const Name = styled.h4`
  text-transform: capitalize;
  color: #50565c;
`;
export const Price = styled.span`
  color: #50565c;
`;
