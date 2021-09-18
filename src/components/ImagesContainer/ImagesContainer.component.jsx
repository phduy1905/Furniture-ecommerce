import React, { useState } from "react";
import { Container } from "./ImagesContainer.styles";

export const ImagesContainer = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Container>
      <img src={main.url} alt={main.filename} className="main" />
      <div className="gallery">
        {images.map((image, idx) => {
          return (
            <img
              key={idx}
              src={image.url}
              alt={image.filename}
              onClick={() => setMain(images[idx])}
              className={image.id === main.id ? "active" : ""}
            />
          );
        })}
      </div>
    </Container>
  );
};
