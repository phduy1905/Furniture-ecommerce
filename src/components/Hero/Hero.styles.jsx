import styled from "styled-components";
import { tablet, mobile } from "../../responsive";

export const Container = styled.div`
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const TextContainer = styled.div`
  text-align: center;
  z-index: 3;
`;

export const Title = styled.h1`
  font-size: var(--bigger-font-size);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: var(--mb-2);
  font-family: "Satisfy", cursive;
  line-height: 2;

  ${mobile({ fontSize: "2rem" })}
`;

export const Subtitle = styled.p`
  display: block;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;

  font-size: var(--h3-font-size);
  letter-spacing: 1px;
  margin-bottom: var(--mb-2);
  line-height: 2;
`;
