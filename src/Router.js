import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main/Main';
import Mypage from './Mypage/Mypage';
import LoginMypage from './Mypage/LoginMypage';
import OrderPage from './OrderPage/OrderPage';
import OrderReview from './OrderPage/OrderReview';
import Complete from './OrderPage/Complete';
import ProductDetailList from './ProductDetailList/ProductDetailList';
import ProductDetailPage from './ProductDetailPage/ProductDetailPage';
import Cart from './Cart/Cart';

import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/LoginMyPage/*" element={<LoginMypage />} />
        <Route path="/ProductDetailList" element={<ProductDetailList />} />
        <Route
          path="/ProductDetailPage/:productid"
          element={<ProductDetailPage />}
        />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/OrderReview" element={<OrderReview />} />
        <Route path="/Complete" element={<Complete />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
