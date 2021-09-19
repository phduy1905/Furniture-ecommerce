import React from "react";
import { Container, Wrapper, Text, Title, Desc } from "./Discount.styles";
import { PrimaryButton } from "../index";

export const Discount = () => {
  return (
    <Container>
      <Wrapper>
        <Text data-aos="fade-right">
          <Title>Log in of 20% discount</Title>
          <Desc>
            Among the activities, the purchase of the following products can
            play 20% off discount, quickly login it!
          </Desc>
        </Text>
        <PrimaryButton url="/signin">Log in</PrimaryButton>
      </Wrapper>
    </Container>
  );
};
