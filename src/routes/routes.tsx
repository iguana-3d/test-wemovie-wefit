import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderFooterLayout from '../components/layouts/HeaderFooterLayout';
//Pages
import Cart from '../pages/Cart';
import Error from '../pages/Error';
import Home from '../pages/Home';
import PurchaseMade from '../pages/PurchaseMade';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooterLayout />}>
        <Route index element={<Home />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="compra-realizada" element={<PurchaseMade />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRoutes;
