import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App';

describe('Header Test', () => {
    test('renders Header', () =>{
        render(
        <Provider store={store}>
            <App />
        </Provider>
        )

        const header = screen.getByTestId('header');
        expect(header).toHaveTextContent('Storefront')
    })
})