import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Typography, CardMedia, CardContent, CardActions, Grid } from '@mui/material';
import { When } from 'react-if';
import { ADD_TO_CART } from '../../store/cart';
import { getProducts, removeStock } from '../../store/products';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {

    const { products } = useSelector((state) => state.products);
    const { activeCategory } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    // console.log(products);
    // console.log(activeCategory);

    const addDispatcher = (product) => {
        dispatch(ADD_TO_CART(product));
        dispatch(removeStock(product));
    }

    useEffect(() => {
        dispatch(getProducts(activeCategory.name))
    }, [activeCategory])

    return (
        <When condition={activeCategory}>
            <Grid container spacing={2} width="80%" margin="auto">
                {products.map((product, index) => (
                    <>
                        {
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <Card key={`products-${index}`} sx={{ maxWidth: 345 }}>
                                    <CardMedia id="img-container"
                                        sx={{ height: 140 }}
                                        image={`https://source.unsplash.com/random/?${product.name}`}
                                        title={product.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: ${product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            In-Stock: {product.inStock}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <When condition={product.inStock}>
                                            <Button size="small" onClick={() => addDispatcher(product)}>Add to Cart</Button>
                                        </When>
                                        <Button
                                            size="small"
                                            component={Link}
                                            to={`/product/${product._id}`}>View Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        }
                    </>
                ))}
            </Grid>
        </When>
    )
}

export default Products;