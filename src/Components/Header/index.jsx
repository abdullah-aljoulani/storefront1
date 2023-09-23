import { useSelector } from 'react-redux';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import './styles.scss';
import { Link } from 'react-router-dom';
function Header() {

    const { cart } = useSelector((state) => state.cart);
    // console.log(cart)

    return (
        <AppBar data-testid="header" sx={{ backgroundColor: 'white' }}>
            <Toolbar className="toolbar" >
                <Grid container>
                    <Grid item>
                        <Typography
                            variant='h4'
                            sx={{ color: 'black' }}>
                            The Storefront of Practicing
                        </Typography>
                    </Grid>
                    <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
                        <Button 
                        component={Link}
                        to={`/cart`}
                        >
                            Cart ({cart.length})
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;