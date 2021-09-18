import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  Logo,
  MenuContainer,
  MenuLink,
  RightContainer,
  CartContainer,
  SignIn,
  SidebarIconContainer,
} from "./Navbar.styles";
import { links } from "../../utils/constants";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import { useHistory, useLocation } from "react-router";

export const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <Container pathname={pathname} className={`${navbarBg ? "scroll" : ""}`}>
      <Wrapper>
        <LogoContainer to="/">
          <Logo>BSN.YY</Logo>
        </LogoContainer>
        <MenuContainer>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <MenuLink
                key={id}
                onClick={() => history.push(`${url}`)}
                className={`${pathname === url ? "active" : ""}`}
              >
                {text}
              </MenuLink>
            );
          })}
        </MenuContainer>
        <RightContainer>
          <SignIn>sign in</SignIn>
          <CartContainer onClick={() => history.push("/cart")}>
            <Badge badgeContent={total_items} color="secondary">
              <ShoppingCartIcon style={{ fill: "#fff" }} />
            </Badge>
          </CartContainer>
          <SidebarIconContainer onClick={openSidebar}>
            <MenuOpenIcon />
          </SidebarIconContainer>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};
