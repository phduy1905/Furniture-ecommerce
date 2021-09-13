import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
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

    default:
      return { ...state };
  }
};

export default products_reducer;
