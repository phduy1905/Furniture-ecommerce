import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 50px;
  flex-wrap: wrap;

  ${tablet({ padding: "0 2rem " })}
`;

export const Feature = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 30px;
`;

export const FeatureIcon = styled.i`
  color: #3cb28e;
  svg {
    font-size: 2rem;
  }
`;

export const FeatureTitle = styled.h3`
  text-transform: uppercase;
  margin: 25px 0;
  font-size: 24px;
`;

export const FeatureText = styled.p`
  color: #aaa;
  line-height: 1.6;
  letter-spacing: 1px;
`;
