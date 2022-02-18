import { ADD_TO_CART, REMOVE_ITEM, DELETE_ITEM, CLEAR_CART } from "./action";
import { foodData } from "../utils/foodData";

const initialState = {
  products: foodData,
  cart: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var foodId = action.payload.id;
      var addedItem = state.products.find((item) => item.id === foodId);
      var existedItem = state.cart.find((item) => item.id === foodId);
      if (existedItem) {
        addedItem.quantity += 1;

        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, addedItem],
          total: state.total + addedItem.price,
        };
      }

    case REMOVE_ITEM:
      var foodId = action.payload.id;
      var removedItem = state.products.find((item) => item.id === foodId);
      var newCart = state.cart.filter((item) => item.id !== foodId);
      const newTotal = state.total - removedItem.price * removedItem.quantity;
      return {
        ...state,
        cart: newCart,
        total: newTotal,
      };

    case DELETE_ITEM:
      var foodId = action.payload.id;
      var removedItem = state.products.find((item) => item.id === foodId);

      if (removedItem.quantity === 1) {
        var newCart = state.cart.filter((item) => item.id !== foodId);
        const newTotal = state.total - removedItem.price * removedItem.quantity;
        return {
          ...state,
          cart: newCart,
          total: newTotal,
        };
      } else {
        removedItem.quantity -= 1;
        return {
          ...state,
          total: state.total - removedItem.price,
        };
      }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
