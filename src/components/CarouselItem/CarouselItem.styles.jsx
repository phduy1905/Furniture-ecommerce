import styled from "styled-components";
import { mobile } from "../../responsive";
export const AddButton = styled.div`
  position: absolute;
  display: block;
  bottom: 1rem;
  right: 1rem;
  background-color: #3ab18e;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transform: rotate(135deg) scale(1);
  transition: all 0.4s;
  cursor: pointer;
  svg {
    font-size: 1.4rem;
  }

  &:hover {
    background-color: #25715b;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 400px;
  &::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 0%;
    background-color: #fc4a24;
    bottom: 0;
    left: 0;
    transition: width 0.5s;
  }
`;

export const Container = styled.div`
  margin: 0 10px;

  &:hover ${AddButton} {
    opacity: 1;
    transform: rotate(0);
  }

  &:hover ${ImgContainer} {
    &::after {
      width: 100%;
    }
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 1rem 0.5rem;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  ${mobile({ flexDirection: "column" })}
`;

export const InfoBottom = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  letter-spacing: 1px;

  ${mobile({ textAlign: "center", marginBottom: "15px", minHeight: "55px" })}
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div``;
