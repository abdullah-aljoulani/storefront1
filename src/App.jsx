import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Storefront from './Components/Storefront'
import ShoppingCart from './Components/ShoppingCart';
import ProductDetails from './Components/ProductDetails';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
