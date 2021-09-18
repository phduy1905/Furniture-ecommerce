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
import SearchIcon from "@material-ui/icons/Search";
import { formatNumber } from "../../utils/helpers";
import { useHistory } from "react-router";

const CarouselItem = ({ product }) => {
  const { id, name, price, image, description } = product;
  const history = useHistory();
  return (
    <Container>
      <ImgContainer>
        <Img src={image}></Img>
        <AddButton onClick={() => history.push(`/products/${id}`)}>
          <SearchIcon />
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
