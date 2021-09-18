import React, { useEffect, useState } from "react";

import {
  Container,
  Header,
  CloseButton,
  FormContainer,
  Form,
  FormControl,
  Input,
  InputTitle,
  CategoriesContainer,
  Select,
  Option,
  ColorsContainer,
  SliderContainer,
  Field,
  PriceInput,
  Label,
  RemoveButton,
  ShippingContainer,
  SubmitContainer,
  SubmitButton,
} from "./FilterMobile.styles";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import { useFilterContext } from "../../context/filter_context";
import { debounce, formatNumber, getUniqueValues } from "../../utils/helpers";
export const FilterMobile = () => {
  const {
    updateFilter,
    clearFilter,
    closeFilterMobile,
    filter_mobile_open,
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
    <Container className={`${filter_mobile_open && "filter-show"}`}>
      <Header>
        <CloseButton onClick={closeFilterMobile}>
          <CloseIcon />
        </CloseButton>
        <h3>Filters</h3>
        <RemoveButton onClick={clearFilter}>Clear Filters</RemoveButton>
      </Header>
      <FormContainer>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormControl>
            <Input
              type="text"
              name="text"
              placeholder="Product name..."
              onChange={(e) => updateFilter(e)}
            />
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
          <SubmitContainer onClick={closeFilterMobile}>
            <SubmitButton>Apply</SubmitButton>
          </SubmitContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};
