import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './Main/Main';
import Mypage from './Mypage/Mypage';
import LoginMypage from './Mypage/LoginMyPage/LoginMypage';
import OrderPage from './OrderPage/OrderPage';
import ProductDetailList from './ProductDetailList/ProductDetailList';
import ProductDetailPage from './ProductDetailPage/ProductDetailPage';
import Cart from './Cart/Cart';
import Footer from './components/Footer/Footer';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
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
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />"
    </BrowserRouter>
  );
};

export default Router;
