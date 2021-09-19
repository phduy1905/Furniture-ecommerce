import React from "react";
import { Container } from "./HomePage.styles";
import {
  Story,
  Features,
  Gallery,
  Discount,
  Carousel,
  Hero,
  ScrollTop,
} from "../../components";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
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
