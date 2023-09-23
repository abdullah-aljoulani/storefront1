import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActiveCategory from "../ActiveCategory";
import SimpleCart from "../SimpleCart";

function ProductDetails() {

    const { id } = useParams();
    const { products } = useSelector((state) => state.products);

    const activeProduct = products.find(product => product._id === id);
    console.log(activeProduct)
    return (
        <>
        <ActiveCategory />
        <SimpleCart />
        <h1>{activeProduct.name}</h1>
        <h2>${activeProduct.price}</h2>
        <h3>Quantity Available: {activeProduct.inStock}</h3>
        </>
    )
}

export default ProductDetails;