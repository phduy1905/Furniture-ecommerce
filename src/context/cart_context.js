import React, { useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducer/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
const CartContext = React.createContext();

const cartItems = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cart: cartItems || [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleCartItemAmount = (id, color, max, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, color, max, value },
    });
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        toggleCartItemAmount,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
