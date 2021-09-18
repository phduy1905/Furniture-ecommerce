import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  border-bottom: 7px solid #535353;
  text-align: center;
  padding: 0 2rem;
  padding-bottom: 4rem;

  .copyrights {
    font-size: var(--smaller-font-size);
    color: #bbb;

    span {
      font-weight: 700;
      color: #000;
    }
  }

  ${mobile({ padding: "1rem 0" })}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  padding: 6rem 1rem 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #efefef;

  ${mobile({
    flexDirection: "column",
    padding: "3rem 0rem 3rem 0rem",
    rowGap: "1rem",
  })}
`;

export const Left = styled.div`
  display: flex;
  column-gap: 1rem;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: var(--normal-font-size);
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${mobile({ position: "initial", left: "0", transform: "translateX(0)" })}
`;

export const Right = styled.div`
  display: flex;
  column-gap: 2rem;

  ${tablet({ flexDirection: "column", rowGap: "1rem" })}
`;

export const IconsContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
