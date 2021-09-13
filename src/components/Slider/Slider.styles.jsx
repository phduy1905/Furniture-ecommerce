import styled from "styled-components";
import { tablet, mobile } from "../../responsive";
export const Container = styled.div`
  height: calc(100vh - var(--header-height));
  width: 100%;
  margin-top: var(--header-height);
  padding: 0 2rem;

  ${tablet({ paddingTop: "2rem" })}
`;

export const SliderContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-color: ${(props) => props.bg};
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: all 0.3s;
  display: flex;
  align-items: center;

  ${tablet({ flexDirection: "column", justifyContent: "flex-start" })}
`;

export const NavigateButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 2;
  left: ${(props) => (props.side === "left" ? "20px" : "")};
  right: ${(props) => (props.side === "right" ? "20px" : "")};
  opacity: 0.2;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const SlideLeft = styled.div`
  width: 40%;

  ${tablet({ width: "100%" })}
`;

export const SmallText = styled.span`
  text-transform: uppercase;
  font-size: var(--h3-font-size);
  position: absolute;
  color: var(--title-color);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  top: 10%;
  left: 0;

  ${tablet({ display: "none" })}
`;

export const SlideRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  position: relative;
  ${tablet({ width: "100%" })}
`;

export const SlideTitle = styled.h2`
  font-size: var(--bigger-font-size);
  color: var(--title-color);
  font-weight: 300;
  letter-spacing: 12px;
  margin-bottom: var(--mb-1);
`;

export const SlideDesc = styled.p`
  color: var(--text-color);
  letter-spacing: 2px;
  margin-bottom: 3rem;
`;

export const ImgContainer = styled.div`
  height: 60vh;
  width: 60vw;
  max-height: 500px;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${tablet({ height: "40vh", width: "40vw" })}
  ${mobile({ height: "30vh", width: "30vw" })}
`;

export const SlideImg = styled.img`
  object-fit: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const PriceContainer = styled.div`
  text-align: right;
  text-align: right;
  color: var(--text-color);
  font-size: 1.4rem;
`;

export const PriceText = styled.p`
  font-size: 3rem;
  color: var(--green-color);
  letter-spacing: 2px;
`;

export const ShopBtn = styled.button``;
