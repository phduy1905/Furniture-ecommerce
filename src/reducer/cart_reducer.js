import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const existingItem = state.cart.find((i) => i.id === id + color);
    if (existingItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        return { ...state, cart: tempCart };
      });
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        price: product.price,
        color: color,
        amount,
        max: product.stock,
        image: product.images[0].url,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, max, value } = action.payload;
    console.log(id);
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (value === "increase") {
          let newAmount = cartItem.amount + 1;
          if (newAmount >= max) {
            newAmount = max;
          }
          return { ...cartItem, amount: newAmount };
        }
        if (value === "decrease") {
          let newAmount = cartItem.amount - 1;
          if (newAmount <= 1) {
            newAmount = 1;
          }
          return { ...cartItem, amount: newAmount };
        }
      } else {
        return { ...cartItem };
      }
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const totalItems = state.cart.reduce((accum, current) => {
      return accum + current.amount;
    }, 0);
    const totalAmount = state.cart.reduce((accum, current) => {
      return accum + current.amount * current.price;
    }, 0);
    return { ...state, total_items: totalItems, total_amount: totalAmount };
  }
};

export default cart_reducer;
