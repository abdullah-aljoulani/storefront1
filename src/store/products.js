import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        },
        CHANGE_CATEGORY_PRODUCTS: (state, action) => {
            return {
                ...state,
                products: state.products.filter(product => product.category === action.payload.name)
            }
        },
        RESET: (state, action) => {
            return state;
        }
    }
})
export const { setProducts, CHANGE_CATEGORY_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = (activeCategory) => async (dispatch, getState) => {
    let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
    // console.log('initial data from getProducts', response.data.results)
    dispatch(setProducts(response.data.results));
}

export const removeStock = (product) => async (dispatch) => {
    product = { ...product, inStock: product.inStock - 1 };
    const res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
    // console.log('was it removed?', res.data);
    dispatch(getProducts(product.category));
}

export const addStock = (product) => async (dispatch) => {
    product = { ...product, inStock: product.inStock };
    const res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
    // console.log('was it added?', res.data);
    dispatch(getProducts(product.category));
}
