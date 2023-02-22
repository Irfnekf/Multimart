import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routers = () => {
  return (
    <Routes>
      <Route path="Multimart/" element={<Navigate to="home" />} />
      <Route path="Multimart/home" element={<Home />} />
      <Route path="Multimart/shop" element={<Shop />} />
      <Route path="Multimart/shop/:id" element={<ProductDetails />} />
      <Route path="Multimart/cart" element={<Cart />} />
      <Route path="Multimart/checkout" element={<Checkout />} />
      <Route path="Multimart/login" element={<Login />} />
      <Route path="Multimart/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
