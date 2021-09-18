import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_ERROR,
  GET_ITEM_FROM_STOCK,
  RETURN_ITEM_TO_STOCK,
} from "../actions";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: true,
      };

    case SIDEBAR_CLOSE:
      return {
        ...state,
        isSidebarOpen: false,
      };

    case FETCH_PRODUCTS_START:
      return {
        ...state,
        products_loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        products_error: false,
        products: action.payload,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };

    case FETCH_SINGLE_PRODUCT_START:
      return {
        ...state,
        single_product_loading: true,
      };

    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: false,
        single_product: action.payload,
      };

    case FETCH_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    case GET_ITEM_FROM_STOCK:
      return {
        ...state,
        single_product: {
          ...state.single_product,
          stock: state.single_product.stock - 1,
        },
      };

    case RETURN_ITEM_TO_STOCK:
      return {
        ...state,
        single_product: {
          ...state.single_product,
          stock: state.single_product.stock + 1,
        },
      };

    default:
      return { ...state };
  }
};

export default products_reducer;
