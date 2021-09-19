import React from "react";
import {
  Container,
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Img,
} from "./Gallery.styles";
import Image1 from "../../assets/gallery1.jpeg";
import Image2 from "../../assets/gallery2.jpeg";
import Image3 from "../../assets/gallery3.jpeg";
import Image4 from "../../assets/gallery4.jpeg";
import Image5 from "../../assets/gallery5.jpeg";

export const Gallery = () => {
  return (
    <Container>
      <Block1 data-aos="fade-down">
        <Img src={Image1} />
      </Block1>
      <Block2 data-aos="fade-down" data-aos-delay="200">
        <Img src={Image2} />
      </Block2>
      <Block3 data-aos="fade-down" data-aos-delay="400">
        <Img src={Image3} />
      </Block3>
      <Block4 data-aos="fade-down" data-aos-delay="600">
        <Img src={Image4} />
      </Block4>
      <Block5 data-aos="fade-down" data-aos-delay="800">
        <Img src={Image5} />
      </Block5>
    </Container>
  );
};
