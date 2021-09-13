import React from "react";
import { Container } from "./HomePage.styles";
import {
  Story,
  Features,
  Gallery,
  Discount,
  Carousel,
  Slider,
} from "../../components";

export const HomePage = () => {
  return (
    <Container>
      <Slider />
      <Story />
      <Features />
      <Gallery />
      <Discount />
      <Carousel />
    </Container>
  );
};
