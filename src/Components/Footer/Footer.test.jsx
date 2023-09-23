import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Test', () => {
    test('renders footer', () =>{
        render(<Footer />)

        const footer = screen.getByTestId('footer');
        expect(footer).toHaveTextContent('Ike Steoger')
    })
})