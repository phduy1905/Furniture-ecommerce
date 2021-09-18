import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.section`
  width: 100%;
  display: flex;
  padding-right: 4rem;
  align-items: center;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

  ${tablet({
    flexDirection: "column",
    padding: "2rem",
  })}

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 3px;
    width: 150px;
    background-color: #fa4b25;

    ${tablet({ display: "none" })}
  }
`;

export const StoryImgContainer = styled.div`
  flex: 1.5;
  height: 600px;
  margin-right: 60px;
  ${tablet({ height: "400px", marginBottom: "25px", marginRight: "0px" })}
`;

export const StoryImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StoryContent = styled.div`
  flex: 1;
  text-align: right;
`;

export const StoryTitle = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 40px;
  position: relative;
  font-weight: 700;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 30%;
    bottom: -5px;
    right: 0;
    background-color: #bbb;
  }
`;

export const StoryText = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  color: #aaa;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 30px;
`;
