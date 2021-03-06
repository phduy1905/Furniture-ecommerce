import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 2rem 1rem;

  ${mobile({ gridTemplateColumns: "1fr", gap: "1fr", padding: "1rem" })}
`;

export const Left = styled.div`
  span {
    color: var(--text-color);
    font-size: var(--h3-font-size);
  }
  ${mobile({ marginBottom: "1rem" })}
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) auto;
  gap: 1rem;
  ${mobile({ gridTemplateColumns: "1fr 1fr" })}
`;
export const ViewContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  column-gap: 0.5rem;
  svg {
    font-size: 2rem;
  }
`;

export const GridView = styled.div`
  opacity: 0.1;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
`;

export const ListView = styled.div`
  opacity: 0.1;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
`;

export const Filter = styled.div`
  display: none;

  ${mobile({ display: "block" })}
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  padding: 0 0.5rem;
  color: #50565c;
  font-size: var(--text-font-size);
  cursor: pointer;
`;

export const Option = styled.option``;
