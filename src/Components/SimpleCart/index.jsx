import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../../store/cart';
import { addStock } from '../../store/products';
import { When } from 'react-if';
import './styles.scss';


function SimpleCart() {

    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(cart)

    const removeDispatcher = (product) => {
        dispatch(REMOVE_FROM_CART(product));
        dispatch(addStock(product));
    }

    return (
        <When condition={cart.length > 0}>
            <div className="simple-cart">
                <ul>
            {
                cart.map((product, index) => (
                    <li key={`simpleCart-${index}`} className="item" >
                        {product.name}
                        <Button onClick={() => removeDispatcher(product)}>X</Button>
                    </li>
                ))
            }
            </ul>
            </div>
        </When>
    )

}

export default SimpleCart;