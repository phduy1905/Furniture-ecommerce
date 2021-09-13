import React from "react";
import {
  Container,
  SidebarHeader,
  CloseSidebarBtn,
  MenuList,
  MenuItem,
  MenuLink,
} from "./Sidebar.styles";
import { links } from "../../utils/constants";
import Logo from "../Logo/Logo.component";
import CloseIcon from "@material-ui/icons/Close";
import { useProductsContext } from "../../context/products_context";

export const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  return (
    <Container className={`${isSidebarOpen ? "sidebar-show" : ""}`}>
      <SidebarHeader>
        <Logo />
        <CloseSidebarBtn onClick={closeSidebar}>
          <CloseIcon style={{ fontSize: "30px" }} />
        </CloseSidebarBtn>
      </SidebarHeader>
      <MenuList>
        {links.map(({ id, text, url }) => {
          return (
            <MenuLink key={id} to={`${url}`}>
              <MenuItem>{text}</MenuItem>
            </MenuLink>
          );
        })}
        <MenuLink to="/signin">
          <MenuItem>Sign In</MenuItem>
        </MenuLink>
      </MenuList>
    </Container>
  );
};
