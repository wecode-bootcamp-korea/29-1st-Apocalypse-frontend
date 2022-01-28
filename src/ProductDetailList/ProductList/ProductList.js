import React from 'react';

import './ProductList.scss';

const ProductList = ({ product }) => {
  return (
    <div className="productList">
      <img alt="testIMG" src="/images/test.jpg" />
      <div className="koreaName">{product.Korea}</div>
      <div className="englishName">{product.English}</div>
      <div className="price">{`${parseInt(product.Price)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`}</div>
    </div>
  );
};

export default ProductList;
