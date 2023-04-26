import { configureStore } from "@reduxjs/toolkit";
import { shirtSlice } from "./slices/shirtSlice";
import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        products: shirtSlice.reducer,
        cart: cartSlice.reducer
    },
})

export default store;