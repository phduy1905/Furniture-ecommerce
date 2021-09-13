import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
`;

const Logo = () => {
  return <LogoContainer to="/">Yudmaph</LogoContainer>;
};

export default Logo;
