import productsReducer from './products';
import cartReducer from './cart';
import categoriesReducer from './categories';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from './cart';
import { setProducts, CHANGE_CATEGORY_PRODUCTS } from './products';
import { setCategories, CHANGE_CATEGORY } from './categories';


describe('Reducers in store', () => {
    const reducers = combineReducers({
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    })

    const store = createStore(reducers);

    test('provides initial state', () => {
        let state = store.getState();
        let { products } = state.products;
        let { cart } = state.cart;
        let { categories } = state.categories;
        expect(products.length).toEqual(0);
        expect(cart.length).toEqual(0);
        expect(categories.length).toEqual(0);
    })

    test('contains relevant products when active category is set', () => {
        let category = { name: 'food', displayName: 'Food' };
        store.dispatch(setCategories(category));
        let state = store.getState();
        let { products } = state.products;
        expect(products.length).toEqual(0);
    })

    test('checks addToCart functionality', () => {
        let product = { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 };
        store.dispatch(ADD_TO_CART(product));
        let state = store.getState();
        let { cart } = state.cart;
        expect(cart.length).toEqual(1);
        expect(cart[0].name).toEqual('TV');
    })

    test('checks removeFromCart functionality', () => {
        let product = { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 };
        store.dispatch(REMOVE_FROM_CART(product));
        let state = store.getState();
        let { cart } = state.cart;
        expect(cart.length).toEqual(0);
    })

    test('checks reset functionality', () => {
        store.dispatch(RESET());
        let state = store.getState();
        let { cart } = state.cart;
        expect(cart.length).toEqual(0);
    })

})
