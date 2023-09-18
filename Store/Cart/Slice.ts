import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProducts, Product } from "./Model";

const initialState: CartProducts = {
  cartproducts: [
    // {
    //   id: 1,
    //   name: "Margherita Pizza",
    //   description: "Classic tomato and mozzarella cheese",
    //   price: 109.9,
    //   img: "/p1.png",
    //   quantity: 1,
    // },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQt: (state, action: PayloadAction<number>) => {
      const index = state.cartproducts.findIndex(
        (todo: Product) => todo.id === action.payload
      );
      state.cartproducts[index].quantity =
        state.cartproducts[index].quantity + 1;
    },
    decreaseQt: (state, action: PayloadAction<number>) => {
      const index = state.cartproducts.findIndex(
        (todo: Product) => todo.id === action.payload
      );
      if (index !== -1) {
        if (state.cartproducts[index].quantity > 0) {
          state.cartproducts[index].quantity =
            state.cartproducts[index].quantity - 1;
        }

        if (state.cartproducts[index].quantity === 0) {
          // If quantity becomes zero, remove the item from the array
          state.cartproducts.splice(index, 1);
        }
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartproducts.findIndex(
        (todo: Product) => todo.name === action.payload.name
      );
      state.cartproducts.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cartproducts.findIndex(
        (todo: Product) => todo.id === action.payload
      );
      state.cartproducts.splice(index, 1);
    },
    clearCart: (state, action: PayloadAction) => {
      state.cartproducts = [];
    },
  },
});
export const { decreaseQt, removeFromCart, increaseQt, addToCart, clearCart } =
  cartSlice.actions;

// ? Export the authSlice.reducer to be included in the store.
export default cartSlice.reducer;
