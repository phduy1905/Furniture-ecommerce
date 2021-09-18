import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .main {
    height: 500px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 1rem;
    column-gap: 1rem;

    img {
      height: 100px;
      cursor: pointer;

      &.active {
        border: 2px solid #ff7777;
      }
    }
  }
`;
