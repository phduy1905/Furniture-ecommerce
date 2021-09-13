import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  IconsContainer,
} from "./Footer.styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">TERM & JEE_Lion</Link>
          <Link to="/">POLICY</Link>
          <Link to="/">MAP</Link>
        </Left>
        <Center>
          <h2>
            BNS
            <br />
            YY
          </h2>
        </Center>
        <Right>
          <span>Follow us on social</span>
          <IconsContainer>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
          </IconsContainer>
        </Right>
      </Wrapper>
      <div> &copy;2021 BNS.YY. All rights reserved</div>
    </Container>
  );
};
