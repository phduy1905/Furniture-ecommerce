import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
export const Container = styled.div`
  margin-top: var(--header-height);
  background: linear-gradient(
    180deg,
    rgba(126, 255, 245, 1) 0%,
    rgba(23, 192, 235, 1) 100%
  );
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 600px;
  width: 80%;
  max-width: 1140px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  ${tablet({ gridTemplateColumns: "1fr", width: "80%" })}
  ${mobile({ width: "100%" })}
`;

export const Left = styled.div`
  background-image: url("https://images.pexels.com/photos/1029796/pexels-photo-1029796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  ${tablet({ display: "none" })}
`;

export const Right = styled.div`
  padding: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: var(--mb-2-5);
`;

export const FormContainer = styled.div`
  span {
    display: block;
    text-align: center;
    margin: 0.5rem 0;
  }
`;

export const Form = styled.form``;

export const FormControl = styled.div`
  margin-bottom: var(--mb-1-5);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: var(--mb-0-5);
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid #eee;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  background-color: ${(props) => (props.google ? "#4885ed" : "#fab1a0")};
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
  }
`;

export const RegisterLink = styled(Link)`
  color: #bbb;
  margin-top: var(--mb-1);
  display: block;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: #7f8c8d;
  }
`;
