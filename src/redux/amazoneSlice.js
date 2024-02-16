import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    //add item to the cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    //increment the cart
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    //decrement the cart
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    //delete item from cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    //reset cart
    resetCart: (state) => {
      state.products = [];
    },

    //product reducer end

    //userinfo reducer start
    //user auth
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    userSignOut: (state) => {
      state.userInfo = null;
    },
    //userinfo reducer end
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
