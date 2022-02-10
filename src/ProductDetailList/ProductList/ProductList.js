import React from 'react';
import * as Thousand from '../../styles/thousand';
import './ProductList.scss';

const ProductList = ({ product }) => {
  return (
    <div className="productList">
      <img alt="testIMG" src="/images/test.jpg" />
      <div className="koreaName">{product.korean_name}</div>
      <div className="englishName">{product.english_name}</div>
      <div className="price">{Thousand.thousand(product.price)}</div>
    </div>
  );
};

export default ProductList;
