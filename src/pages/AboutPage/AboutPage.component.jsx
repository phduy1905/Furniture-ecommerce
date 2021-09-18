import React from "react";
import { Container, Left, Img, Right, Title, Text } from "./AboutPage.styles";

const AboutPage = () => {
  return (
    <Container>
      <Left>
        <Img src="https://images.pexels.com/photos/5974325/pexels-photo-5974325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </Left>
      <Right>
        <Title>About us</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          soluta distinctio assumenda perspiciatis consequatur? Eaque, vero
          repudiandae praesentium omnis exercitationem iusto unde officiis porro
          maiores, consequatur dolor odit architecto amet optio adipisci, illum
          eligendi veritatis fuga quaerat laboriosam voluptates perferendis ipsa
          similique reprehenderit. Commodi eveniet voluptatibus a, voluptatum
          tempora fuga incidunt quos voluptates vitae eum cumque autem, ipsum
          animi fugit!
        </Text>
      </Right>
    </Container>
  );
};

export default AboutPage;
