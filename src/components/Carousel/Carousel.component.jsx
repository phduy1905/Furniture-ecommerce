import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "../CarouselItem/CarouselItem.component";
import { Container, ButtonsContainer, Button } from "./Carousel.styles";
import { Loading } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useProductsContext } from "../../context/products_context";

export const Carousel = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // centerMode: true,
    // centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef(null);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>There was an error in fetching products...</h1>
      </div>
    );
  } else {
    return (
      <Container>
        <Slider {...settings} ref={slider}>
          {products.map((product) => {
            return <CarouselItem key={product.id} product={product} />;
          })}
          <div styled={{ textAlign: "center" }}></div>
        </Slider>
        <ButtonsContainer>
          <Button onClick={() => slider?.current?.slickNext()}>
            <ArrowForwardIcon />
          </Button>
          <Button onClick={() => slider?.current?.slickPrev()}>
            <ArrowBackIcon />
          </Button>
        </ButtonsContainer>
      </Container>
    );
  }
};
