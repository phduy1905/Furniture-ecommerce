import React from "react";
import {
  Container,
  ImgContainer,
  AddButton,
  Img,
  InfoContainer,
  InfoTop,
  InfoBottom,
  Title,
  Price,
} from "./CarouselItem.styles";
import AddIcon from "@material-ui/icons/Add";
import { formatNumber } from "../../utils/helpers";

const CarouselItem = ({ product }) => {
  const { id, name, price, image, description } = product;
  return (
    <Container>
      <ImgContainer>
        <Img src={image}></Img>
        <AddButton>
          <AddIcon />
        </AddButton>
      </ImgContainer>
      <InfoContainer>
        <InfoTop>
          <Title>{name}</Title>
          <Price>{formatNumber(price)}</Price>
        </InfoTop>
        <InfoBottom>{description.substring(0, 45) + "..."}</InfoBottom>
      </InfoContainer>
    </Container>
  );
};

export default CarouselItem;
