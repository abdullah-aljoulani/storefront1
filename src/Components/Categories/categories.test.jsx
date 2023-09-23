import { render, screen } from '@testing-library/react';
import Categories from './index';
import { Provider } from 'react-redux';
import store from '../../store';



describe('Categories Test', () => {
    test('renders Categories', () =>{
        render(
        <Provider store={store}>
            <Categories />
        </Provider>
        )

        const h2 = screen.getByTestId('categories-h2');
        expect(h2).toHaveTextContent('Browse Our Categories')
    })
})