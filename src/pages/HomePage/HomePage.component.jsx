import React from "react";
import { Container } from "./HomePage.styles";
import {
  Story,
  Features,
  Gallery,
  Discount,
  Carousel,
  Slider,
  Hero,
  ScrollTop,
} from "../../components";

export const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Story />
      <Features />
      <Gallery />
      <Discount />
      <Carousel />
      <ScrollTop />
    </Container>
  );
};
