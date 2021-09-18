import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
export const Container = styled.div`
  height: var(--header-height);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-color: ${(props) =>
    props.pathname === "/" ? "transparent" : "#0b0229"};

  &.scroll {
    background-color: #0b0229;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const Logo = styled.h1`
  font-size: var(--h2-font-size);
  font-weight: 700;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  column-gap: 50px;
  height: 100%;
  ${mobile({ display: "none" })}
`;

export const MenuLink = styled.button`
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
  font-size: var(--h3-font-size);
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #fff;
  }

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CartContainer = styled.div`
  font-size: var(--h3-font-size);
  cursor: pointer;
`;
export const SignIn = styled.div`
  text-transform: uppercase;
  margin-right: 15px;
  display: block;
  color: #fff;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;
export const SidebarIconContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  cursor: pointer;

  svg {
    fill: #fff;
  }
  &:hover {
    opacity: 0.7;
  }
  ${mobile({ display: "flex" })}
`;
