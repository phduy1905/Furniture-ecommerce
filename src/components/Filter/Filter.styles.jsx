import styled from "styled-components";

export const Container = styled.div`
  background-color: #faf8f4;
  grid-column: center-start / col-end 2;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--title-color);
  margin-bottom: var(--mb-2);
  font-size: var(--h2-font-size);
`;

export const Form = styled.form``;

export const FormControl = styled.div`
  margin-bottom: var(--mb-1-5);
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 0;
  font-size: var(--normal-font-size);
  border: none;
  background-color: #faf8f4;
  border-bottom: 2px solid var(--title-color);
  outline: none;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0rem;

  svg {
    font-size: 2rem;
  }
`;

export const InputTitle = styled.h3`
  color: #bcbab9;
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
`;

export const CategoriesContainer = styled.div`
  button {
    display: flex;
    background-color: transparent;
    border: none;
    padding: 0.5rem 0;
    cursor: pointer;
    width: 100%;
    transition: all 0.3s;
    text-transform: capitalize;

    &:hover {
      background: #eeeded;
      padding-left: 1rem;
    }

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  outline: none;
  color: var(--title-color);
  font-weight: 700;
  border: 1px solid var(--text-color);
`;

export const Option = styled.option``;

export const Label = styled.label``;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
  .color-btn {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1rem;
      color: #fff;
    }
  }

  .all-btn {
    border: none;
    background-color: transparent;
    text-transform: capitalize;

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const SliderContainer = styled.div`
  height: 30px;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Value = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  color: #7b7d80;
  left: ${(props) => props.side === "left" && "-22px"};
  right: ${(props) => props.side === "right" && "-43px"};
`;

export const PriceInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #ddd;
  border: none;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  &::-moz-range-progress {
    background-color: red;
  }
`;

export const SliderValue = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    height: 45px;
    width: 45px;
    color: #fff;
    font-weight: 500;
    top: -40px;
    transform: translateX(-50%) scale(0);
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
    line-height: 55px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    &.show {
      transform: translateX(-50%) scale(1);
    }

    &::after {
      position: absolute;
      content: "";
      height: 45px;
      width: 45px;
      background: red;
      font-weight: 500;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border: 3px solid #fff;
      z-index: -1;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;
    }
  }
`;

export const ShippingContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: var(--h3-font-size);
    color: var(--title-color);
  }
`;

export const RemoveButton = styled.button`
  background-color: #f67c8c;
  padding: 1rem 2rem;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f34c62;
  }
`;
