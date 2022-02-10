import React from 'react';
import { useNavigate } from 'react-router';
import * as Thousand from '../../styles/thousand';
import './ProductList.scss';

const ProductList = ({ product }) => {
  const navigate = useNavigate();

  const gotoProductDetail = () => {
    navigate(`/ProductDetailPage/${product.id}`);
  };

  return (
    <div className="productList" onClick={gotoProductDetail}>
      <img alt="testIMG" src="/images/test.jpg" />
      <div className="koreaName">{product.korean_name}</div>
      <div className="englishName">{product.english_name}</div>
      <div className="price">{Thousand.thousand(product.price)}</div>
    </div>
  );
};

export default ProductList;
