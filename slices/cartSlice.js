import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    taxes: 6,
    deliveryFee: 15,
    freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find((i) => i.product.id === newProduct.id)
            if(cartItem){
                cartItem.quantity++;
            }else{
            state.items.push({product: newProduct, quantity: 1});
            }
        },
        changeQuantity: (state, action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.items.find(item => item.product.id == productId);
            if(cartItem){
                cartItem.quantity += amount;
            }

            if(cartItem.quantity <= 0){
                state.items = state.items.filter(item => item != cartItem);
            }
        },

    }
})

export const selectNumOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => (sum + (cartItem.product.price * cartItem.quantity)), 0
);

const cartSelector = (state) => state.cart;

export const selectDeliveryFee = createSelector(
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee
)

export const selectTaxes = (state) => state.cart.taxes;

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryFee,
    selectTaxes,
    (subtotal, deliveryFee, taxes) => (((subtotal + deliveryFee) * ((taxes/100)  + 1))).toFixed(2)
)


export const selectQuantity = (state) => state.cart.items.reduce((sum ,item) => (sum + (item.quantity)), 0)
