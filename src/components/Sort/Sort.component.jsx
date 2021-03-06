import React from "react";
import {
  Container,
  GridView,
  ListView,
  Form,
  Select,
  Option,
  ViewContainer,
  Left,
  Right,
  Filter,
} from "./Sort.styles";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useFilterContext } from "../../context/filter_context";

export const Sort = () => {
  const {
    setGridView,
    setListView,
    gridView,
    updateSort,
    openFilterMobile,
    filtered_products: products,
  } = useFilterContext();
  return (
    <Container>
      <Left>
        <span>
          <strong>{products.length}</strong> products found
        </span>
      </Left>
      <Right>
        <Form>
          <Select name="sort" id="sort" onChange={(e) => updateSort(e)}>
            <Option value="price-lowest">Price (Lowest)</Option>
            <Option value="price-highest">Price (highest)</Option>
            <Option value="name-a">Name (A-Z)</Option>
            <Option value="name-z">Name (Z-A)</Option>
          </Select>
        </Form>
        <ViewContainer>
          <ListView className={!gridView && "active"} onClick={setListView}>
            <ViewListIcon />
          </ListView>
          <GridView className={gridView && "active"} onClick={setGridView}>
            <AppsIcon />
          </GridView>
          <Filter onClick={openFilterMobile}>
            <FilterListIcon />
          </Filter>
        </ViewContainer>
      </Right>
    </Container>
  );
};
