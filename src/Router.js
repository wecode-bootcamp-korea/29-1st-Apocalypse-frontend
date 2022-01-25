import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main/Main';
import Mypage from './Mypage/Mypage';
import OrderPage from './OrderPage/OrderPage';
import ProductDetailList from './ProductDetailList/ProductDetailList';
import ProductDetailPage from './ProductDetailPage/ProductDetailPage';

import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/ProductDetailList" element={<ProductDetailList />} />
        <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
