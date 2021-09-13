import styled from "styled-components";
import { tablet, mobile } from "../../responsive";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${tablet({ gridTemplateColumns: "repeat(2,1fr)" })};
  ${mobile({ gridTemplateColumns: "1fr" })};
  grid-gap: 1rem;
  padding: 0 1rem;
  min-height: 940px;
  align-content: flex-start;
`;
