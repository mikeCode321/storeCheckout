import { createSlice } from "@reduxjs/toolkit";
import productList from '../shirtData/shirtListData'

const initialState = {
  productsList: productList,
  selectedProduct: null,
};

export const shirtSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload
      state.selectedProduct = state.productsList.find((p) => p.id === productId)
    }
  },
});

export const selectProducts = (state) => state.products.productsList;

export default shirtSlice;
