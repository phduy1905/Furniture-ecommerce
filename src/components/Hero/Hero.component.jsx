import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  TextContainer,
} from "./Hero.styles";
import { PrimaryButton } from "..";

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title data-aos="fade-right">Design for your comfort</Title>
          <Subtitle data-aos="fade-right" data-aos-delay="500">
            The highest quality furniture you can find in South East Asia
          </Subtitle>
          <PrimaryButton url="/products">Shop now</PrimaryButton>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};
