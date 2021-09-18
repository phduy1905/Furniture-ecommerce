import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  FormContainer,
  Title,
  Form,
  FormControl,
  Label,
  Input,
  Button,
  RegisterLink,
} from "./SigninPage.styles";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <Container>
      <Wrapper>
        <Left />
        <Right>
          <FormContainer>
            <Title>Sign in</Title>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormControl>
                <Label>Email</Label>
                <Input placeholder="Your email" required></Input>
              </FormControl>
              <FormControl>
                <Label>Password</Label>
                <Input placeholder="Your password"></Input>
              </FormControl>
              <Button>Log in</Button>
              <span>or</span>
              <Button google>Connect with Google</Button>
            </Form>
          </FormContainer>
          <RegisterLink to="/register">Don't have an account?</RegisterLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SigninPage;
