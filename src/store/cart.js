import { createReducer, createSlice } from '@reduxjs/toolkit';

let initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            return {
                ...state,
                cart: [
                    ...state.cart, action.payload
                ]
            }
        },
        REMOVE_FROM_CART: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item.name !== action.payload.name)
            }
        },
        RESET: (state) => {
            return state
        }
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, RESET } = cartSlice.actions;
export default cartSlice.reducer;
