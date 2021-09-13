import React from "react";
import {
  Container,
  StoryImgContainer,
  StoryImg,
  StoryContent,
  StoryTitle,
  StoryText,
} from "./Story.styles";
import SecondaryButton from "../SecondaryButton/SecondaryButton.component";

export const Story = () => {
  return (
    <Container>
      <StoryImgContainer>
        <StoryImg src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      </StoryImgContainer>
      <StoryContent>
        <StoryTitle>Our story</StoryTitle>
        <StoryText>
          Contemporary classics that issue from the convergence of the most
          sophisticated crafting methos and cutting edge technology. Alongside
          the creative and experimental production of the made in Italy industry
          we find the expertly crafted creations, at times handcrafted, typical
          of BNS service studied to meet the demand for customise furniture, as
          in an alelier.
        </StoryText>
        <SecondaryButton>move</SecondaryButton>
      </StoryContent>
    </Container>
  );
};
