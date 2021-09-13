import React from "react";
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
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <Container>
      <Wrapper>
        <LogoContainer to="/">
          <Logo>YUDMAHP</Logo>
        </LogoContainer>
        <MenuContainer>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <MenuLink key={id} to={`/${url}`}>
                {text}
              </MenuLink>
            );
          })}
        </MenuContainer>
        <RightContainer>
          <SignIn>sign in</SignIn>
          <CartContainer>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
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
