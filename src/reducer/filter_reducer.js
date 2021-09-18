import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_MOBILE_OPEN,
  FILTER_MOBILE_CLOSE,
} from "../actions";
import { paginate } from "../utils/helpers";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const { products, products_loading } = action.payload;
      let maxPrice = products.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        isLoading: products_loading,
        all_products: products,
        filtered_products: products,
        productsPerPage: paginate(products),
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case SET_GRID_VIEW:
      return {
        ...state,
        gridView: true,
      };

    case SET_LIST_VIEW:
      return {
        ...state,
        gridView: false,
      };

    case FILTER_MOBILE_OPEN:
      return {
        ...state,
        filter_mobile_open: true,
      };

    case FILTER_MOBILE_CLOSE:
      return {
        ...state,
        filter_mobile_open: false,
      };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let temp_products = [...filtered_products];
      if (sort === "price-lowest") {
        temp_products = temp_products.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      }
      if (sort === "price-highest") {
        temp_products = temp_products.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
      if (sort === "name-a") {
        temp_products = temp_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        temp_products = temp_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        filtered_products: temp_products,
        productsPerPage: paginate(temp_products),
      };

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case FILTER_PRODUCTS:
      let tempProducts = [...state.all_products];
      const { text, category, company, color, price, free_shipping } =
        state.filters;
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.company === company;
        });
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.includes(color);
        });
      }

      if (price) {
        tempProducts = tempProducts.filter((product) => {
          return product.price <= price;
        });
      } else {
        tempProducts = [];
      }
      if (free_shipping) {
        tempProducts = tempProducts.filter((product) => {
          return product.shipping === true;
        });
      }

      return {
        ...state,
        filtered_products: tempProducts,
        productsPerPage: paginate(tempProducts),
      };

    case UPDATE_FILTER:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.max_price,
          free_shipping: false,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default filter_reducer;
