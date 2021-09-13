import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-height: 800px;
  grid-gap: 20px;
`;

export const Block1 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1/2;
  overflow: hidden;
`;
export const Block2 = styled.div`
  grid-column: 3/-1;
  grid-row: 1/2;
  overflow: hidden;
`;
export const Block3 = styled.div`
  grid-column: 1/2;
  grid-row: 2/-1;
  overflow: hidden;
`;
export const Block4 = styled.div`
  grid-column: 2/4;
  grid-row: 2/-1;
  overflow: hidden;
`;
export const Block5 = styled.div`
  grid-column: 4/-1;
  grid-row: 2/-1;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
