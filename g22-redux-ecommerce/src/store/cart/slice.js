import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload

      return [...state, newProduct]
    },
    removeFromCart: (state, action) => {
      const productId = action.payload

      const newProducts = state.filter(product => product.id !== productId)

      return newProducts
    }
  }
})

export default cartSlice.reducer

export const { addToCart, removeFromCart } = cartSlice.actions