import React, { useContext, useEffect, useReducer } from "react";
import filter_reducer from "../reducer/filter_reducer";
import { useProductsContext } from "./products_context";
import { paginate } from "../utils/helpers";
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_FILTER,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  CLEAR_FILTER,
  FILTER_MOBILE_OPEN,
  FILTER_MOBILE_CLOSE,
} from "../actions";
const initialState = {
  filtered_products: [],
  all_products: [],
  isLoading: false,
  gridView: true,
  sort: "price-lowest",
  productsPerPage: [],
  filter_mobile_open: false,
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    max_price: 0,
    min_price: 0,
    free_shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { products, products_loading } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products, products_loading } });
  }, [products, products_loading]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.filters, state.sort, products]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const updateFilter = (e) => {
    let { name, value } = e.target;
    if (name === "price") {
      value = Number(e.target.value);
    }

    if (name === "free_shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };

  const openFilterMobile = () => {
    dispatch({ type: FILTER_MOBILE_OPEN });
  };

  const closeFilterMobile = () => {
    dispatch({ type: FILTER_MOBILE_CLOSE });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilter,
        clearFilter,
        updateSort,
        openFilterMobile,
        closeFilterMobile,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
