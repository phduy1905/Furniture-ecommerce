import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
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

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
