import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  margin-top: var(--header-height);
  display: grid;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 142px) [col-end]
    )
    [center-end] 1fr [full-end];
`;

export const Right = styled.div`
  grid-column: col-start 3 / center-end;
  padding-bottom: 8rem;
  position: relative;

  ${mobile({ gridColumn: "center-start/ center-end" })}
`;

export const FilterSide = styled.div`
  grid-column: full-start / span 1;
  background-color: #faf8f4;

  ${mobile({ display: "none" })}
`;
