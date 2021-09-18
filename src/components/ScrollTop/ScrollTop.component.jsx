import React, { useState } from "react";
import { Container } from "./ScrollTop.styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export const ScrollTop = () => {
  const [active, setActive] = useState(false);

  const changeScrollTop = () => {
    if (window.scrollY >= 200) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", changeScrollTop);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Container className={`${active && "active"}`} onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </Container>
  );
};
