import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        activeCategory: '',
    },
    reducers: {
        setCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        },
        CHANGE_CATEGORY: (state, action) => {
            return {
                ...state,
                activeCategory: action.payload
            }
        },
        RESET: (state, action) => {
            return state;
        }
    }
})

export const { setCategories, CHANGE_CATEGORY } = categorySlice.actions;
export default categorySlice.reducer;

export const getCategories = () => async(dispatch, getState) => {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    // console.log('getCategories data: ', response.data.results)
    dispatch(setCategories(response.data.results));
}
