import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useProductsContext } from "../../context/products_context";
import {
  Container,
  LoadingContainer,
  ProductContainer,
  ProductInfo,
  Title,
  Price,
  Description,
  Info,
} from "./SingleProductPage.styles";
import { Review, ImagesContainer, AddToCart } from "../../components";
import { single_product_url as url } from "../../utils/constants";
import { Loading } from "../../components";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/helpers";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useCartContext } from "../../context/cart_context";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    fetchSingleProduct: fetch,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();

  const { addToCart } = useCartContext();

  useEffect(() => {
    fetch(`${url}${id}`);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  const {
    colors,
    company,
    description,
    id: sku,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = product;
  return (
    <Container>
      <Link to="/products" className="back">
        <ArrowBackIosIcon />
        Back to products
      </Link>
      <ProductContainer>
        <ImagesContainer images={images} />
        <ProductInfo>
          <Title>{name}</Title>
          <Review reviews={reviews} stars={stars}></Review>
          <Price>{formatNumber(price)}</Price>
          <Description>
            <span className="label" style={{ display: "block" }}>
              Description:
            </span>
            {description}
          </Description>
          <Info>
            <span className="label">Available: </span>
            {stock > 0 ? `${stock} items left in stock` : "Out of stock"}
          </Info>
          <Info>
            <span className="label">SKU: </span>
            {sku}
          </Info>
          <Info>
            <span className="label">Brand: </span>
            {company?.toUpperCase()}
          </Info>
          <hr />
          <AddToCart
            colors={colors}
            stock={stock}
            addToCart={addToCart}
            id={sku}
            product={product}
          />
        </ProductInfo>
      </ProductContainer>
    </Container>
  );
};

export default SingleProductPage;
