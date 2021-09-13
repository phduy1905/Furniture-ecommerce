import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Input,
  Title,
  InputTitle,
  Select,
  Label,
  Option,
  ColorsContainer,
  RemoveButton,
  SearchIconContainer,
  CategoriesContainer,
  PriceInput,
  SliderContainer,
  Field,
  Value,
  ShippingContainer,
} from "./Filter.styles";
import SearchIcon from "@material-ui/icons/Search";
import { useFilterContext } from "../../context/filter_context";
import { debounce, formatNumber, getUniqueValues } from "../../utils/helpers";
import CheckIcon from "@material-ui/icons/Check";

export const Filter = () => {
  const {
    updateFilter,
    clearFilter,
    all_products: products,
    filters: { category, color, price, min_price, max_price, free_shipping },
  } = useFilterContext();

  const [priceValue, setPriceValue] = useState(price);

  useEffect(() => {
    setPriceValue(price);
  }, [price]);

  const handleInputChange = (e) => {
    debounce(() => {
      setPriceValue(e.target.value);
    });
  };

  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  const categories = getUniqueValues(products, "category") || [];

  return (
    <Container>
      <Title>Filter</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormControl style={{ position: "relative" }}>
          <Input
            type="text"
            name="text"
            placeholder="Product name"
            onChange={(e) => updateFilter(e)}
          />
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </FormControl>

        <FormControl>
          <InputTitle>Category</InputTitle>
          <CategoriesContainer>
            {categories.map((c, idx) => {
              return (
                <button
                  className={`category ${c === category ? "active" : ""}`}
                  key={idx}
                  name="category"
                  value={c}
                  onClick={(e) => updateFilter(e)}
                >
                  {c}
                </button>
              );
            })}
          </CategoriesContainer>
        </FormControl>

        <FormControl>
          <InputTitle>Company</InputTitle>
          <Select name="company" onChange={(e) => updateFilter(e)}>
            {companies.map((company, index) => {
              return (
                <Option key={index} value={company}>
                  {company}
                </Option>
              );
            })}
          </Select>
        </FormControl>

        <FormControl>
          <InputTitle>Colors</InputTitle>
          <ColorsContainer>
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    className={`all-btn ${c === color ? "active" : ""}`}
                    name="color"
                    key={index}
                    value="all"
                    onClick={(e) => updateFilter(e)}
                  >
                    {c}
                  </button>
                );
              } else {
                return (
                  <button
                    className={`color-btn`}
                    name="color"
                    key={index}
                    value={c}
                    onClick={(e) => updateFilter(e)}
                    style={{ backgroundColor: c }}
                  >
                    {c === color && <CheckIcon />}
                  </button>
                );
              }
            })}
          </ColorsContainer>
        </FormControl>

        <FormControl>
          <InputTitle>Price</InputTitle>
          <span>{formatNumber(priceValue)}</span>
          <SliderContainer>
            <Field>
              <PriceInput
                type="range"
                min={min_price}
                max={max_price}
                name="price"
                value={priceValue}
                onInput={(e) => handleInputChange(e)}
                onChange={(e) => updateFilter(e)}
              />
            </Field>
          </SliderContainer>
        </FormControl>

        <ShippingContainer>
          <Label>Free Shipping</Label>
          <Input
            type="checkbox"
            style={{ width: "unset" }}
            name="free_shipping"
            checked={free_shipping}
            onChange={(e) => updateFilter(e)}
          />
        </ShippingContainer>

        <RemoveButton onClick={clearFilter}>Clear Filters</RemoveButton>
      </Form>
    </Container>
  );
};
