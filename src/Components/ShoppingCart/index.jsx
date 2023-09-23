import { When } from "react-if";
import { useSelector } from "react-redux";

function ShoppingCart() {
    const { cart } = useSelector((state) => state.cart);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.price
        })
        return total;
    }

    return (
        <When condition={cart.length > 0}>
            <div className="shoppingCart">
                <ul>
                    {
                        cart.map((product, index) => (
                            <li key={`shoppingCart-${index}`} className="item" >
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                            </li>
                        ))
                    }
                    <li key={`shoppingcart-total`} className="item" >
                        <h2>Total</h2>
                        <h2>${calculateTotal()}</h2>
                    </li>
                </ul>
            </div>
        </When>
    )
}

export default ShoppingCart;
