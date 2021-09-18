import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 4;
  transform: translateX(-100%);
  transition: all 0.4s;
  &.sidebar-show {
    transform: translateX(0);
  }

  ${mobile({ display: "block" })}
`;

export const SidebarHeader = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseSidebarBtn = styled.div`
  cursor: pointer;
`;

export const MenuList = styled.ul``;

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  padding: 20px 0;
  font-weight: 500;
  color: #2c3e50;
  display: block;
  &:hover {
    background-color: #ecf0f1;
  }
`;

export const MenuItem = styled.li`
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateX(10px);
  }
`;
