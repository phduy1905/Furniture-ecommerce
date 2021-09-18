import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR,
  GET_ITEM_FROM_STOCK,
  RETURN_ITEM_TO_STOCK,
} from "../actions";
import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from "../reducer/products_reducer";
import { products_url } from "../utils/constants";
import axios from "axios";

const ProductsContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: FETCH_PRODUCTS_START });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_START });
    try {
      const response = await axios.get(url);
      const product = response.data;
      dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: product });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_PRODUCT_ERROR, payload: error });
    }
  };

  const getItemFromStock = () => {
    dispatch({ type: GET_ITEM_FROM_STOCK });
  };

  const returnItemToStock = () => {
    dispatch({ type: RETURN_ITEM_TO_STOCK });
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        getItemFromStock,
        returnItemToStock,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
