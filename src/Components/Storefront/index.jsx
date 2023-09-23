import Header from '../Header';
import Footer from '../Footer';
import Categories from '../Categories';
import Products from '../Products';
import ActiveCategory from '../ActiveCategory';
import SimpleCart from '../SimpleCart';
import './styles.scss';

function Storefront() {
  return (
    <>
      <div className="content">
        <Header />
        <Categories />
        <SimpleCart />
        <ActiveCategory />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Storefront;