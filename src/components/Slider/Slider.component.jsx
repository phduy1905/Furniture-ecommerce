import React, { useState } from "react";
import {
  SlideImg,
  SlideLeft,
  SlideRight,
  Slide,
  Wrapper,
  Container,
  NavigateButton,
  SlideTitle,
  SlideDesc,
  SliderContainer,
  PriceText,
  ImgContainer,
  PriceContainer,
  SmallText,
} from "./Slider.styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { SliderItems } from "../../utils/constants";
import { formatNumber } from "../../utils/helpers";
import SecondaryButton from "../SecondaryButton/SecondaryButton.component";
export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideIndex = (direction) => {
    if (direction === "left") {
      let newIndex = slideIndex - 1;
      if (newIndex < 0) {
        newIndex = 2;
      }
      setSlideIndex(newIndex);
    }
    if (direction === "right") {
      let newIndex = slideIndex + 1;
      if (newIndex > 2) {
        newIndex = 0;
      }
      setSlideIndex(newIndex);
    }
  };

  return (
    <Container>
      <SliderContainer>
        <Wrapper>
          <NavigateButton side="left" onClick={() => handleSlideIndex("left")}>
            <NavigateBeforeIcon />
          </NavigateButton>
          <NavigateButton
            side="right"
            onClick={() => handleSlideIndex("right")}
          >
            <NavigateNextIcon />
          </NavigateButton>
          {SliderItems.map((slide) => {
            const { id, text, desc, price, url } = slide;
            return (
              <Slide key={id} slideIndex={slideIndex}>
                <SlideLeft>
                  <SmallText>BNS&MOBA</SmallText>
                  <SlideTitle>{text}</SlideTitle>
                  <SlideDesc>{desc}</SlideDesc>
                  <SecondaryButton>Shop now</SecondaryButton>
                </SlideLeft>

                <SlideRight>
                  <ImgContainer>
                    <SlideImg src={url} />
                  </ImgContainer>

                  <PriceContainer>
                    <span>Design</span>
                    <p>
                      <i>By: Ib Kodof-Larsen</i>
                    </p>
                    <PriceText>{formatNumber(price)}</PriceText>
                  </PriceContainer>
                </SlideRight>
              </Slide>
            );
          })}
        </Wrapper>
      </SliderContainer>
    </Container>
  );
};
