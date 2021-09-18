import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  height: calc(100vh - var(--header-height));
  width: 100vw;
  background-color: #fff;
  z-index: 2;
  transform: translateY(-100%);
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  &.filter-show {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RemoveButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 12vh;
  h3 {
    font-size: var(--h2-font-size);
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
  svg {
    font-size: 1.8rem;
    font-weight: 100;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const FormContainer = styled.div`
  padding: 2rem;
  height: 74vh;
  overflow-y: auto;
`;

export const Form = styled.form``;

export const FormControl = styled.div`
  margin-bottom: var(--mb-1-5);
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
`;

export const InputTitle = styled.h4`
  margin-bottom: var(--mb-1);
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  button {
    background: none;
    border: none;
    margin: 1rem 2rem 1rem 0;
    text-align: left;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      font-weight: 700;
    }

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
`;

export const Option = styled.option``;

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
    height: 30px;
    width: 30px;
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

export const SliderContainer = styled.div``;

export const Field = styled.div``;

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

export const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  input {
    cursor: pointer;
    height: 20px;
    width: 20px !important;
  }
`;

export const Label = styled.label``;

export const SubmitContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  min-height: 48px;
  padding: 2rem;
  height: 14vh;
`;

export const SubmitButton = styled.button`
  background-color: #f67c8c;
  padding: 1rem 2rem;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 3px;

  &:hover {
    background-color: #f34c62;
  }
`;
