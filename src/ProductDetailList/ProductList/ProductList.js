import React from 'react';

import './ProductList.scss';

const ProductList = ({ product }) => {
  return (
    <div className="productList">
      <img alt="testIMG" src="/images/test.jpg" />
      <div className="koreaName">{product.korean_name}</div>
      <div className="englishName">{product.english_name}</div>
      <div className="price">{`${parseInt(product.price)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`}</div>
    </div>
  );
};

export default ProductList;
