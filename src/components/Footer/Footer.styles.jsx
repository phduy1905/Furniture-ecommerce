import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  padding: 0 2rem;
  border-bottom: 4px solid #515151;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eee;
  padding: 10rem 0 0 0;

  ${tablet({ flexDirection: "column", rowGap: "3rem", padding: "3rem 0" })}
`;

export const Left = styled.div`
  display: flex;
  column-gap: 2rem;

  a {
    color: var(--title-color);
    text-decoration: none;
    font-weight: 600;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  //flex: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--title-color);
  }

  ${tablet({ position: "unset" })}
`;

export const Right = styled.div`
  display: flex;
  column-gap: 4rem;

  span {
    text-transform: uppercase;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;
