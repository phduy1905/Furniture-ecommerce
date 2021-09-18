import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Button,
  TextContainer,
} from "./Hero.styles";
import { PrimaryButton } from "..";
import { useHistory } from "react-router";
export const Hero = () => {
  const history = useHistory();
  console.log(history);
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>Design for your comfort</Title>
          <Subtitle>
            The highest quality furniture you can find in South East Asia
          </Subtitle>
          <PrimaryButton url="/products">Shop now</PrimaryButton>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};
