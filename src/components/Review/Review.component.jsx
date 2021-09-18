import React from "react";
import { Container, Stars, Reviews } from "./Review.styles";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

export const Review = ({ stars, reviews }) => {
  return (
    <Container>
      <Stars>
        <span>
          {stars >= 1 ? (
            <StarIcon />
          ) : stars >= 0.5 ? (
            <StarHalfIcon />
          ) : (
            <StarOutlineIcon />
          )}
        </span>
        <span>
          {stars >= 2 ? (
            <StarIcon />
          ) : stars >= 1.5 ? (
            <StarHalfIcon />
          ) : (
            <StarOutlineIcon />
          )}
        </span>
        <span>
          {stars >= 3 ? (
            <StarIcon />
          ) : stars >= 2.5 ? (
            <StarHalfIcon />
          ) : (
            <StarOutlineIcon />
          )}
        </span>
        <span>
          {stars >= 4 ? (
            <StarIcon />
          ) : stars >= 3.5 ? (
            <StarHalfIcon />
          ) : (
            <StarOutlineIcon />
          )}
        </span>
        <span>
          {stars >= 5 ? (
            <StarIcon />
          ) : stars >= 4.5 ? (
            <StarHalfIcon />
          ) : (
            <StarOutlineIcon />
          )}
        </span>
      </Stars>
      <Reviews>({reviews} customer reviews)</Reviews>
    </Container>
  );
};
