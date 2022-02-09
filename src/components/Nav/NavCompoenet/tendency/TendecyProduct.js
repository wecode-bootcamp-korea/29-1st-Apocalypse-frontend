import React from 'react';
import * as Thousand from '../../../../styles/thousand';

const TendecyProduct = ({ product }) => {
  return (
    <>
      <img alt="KoreaName" src="/images/test.jpg" />
      <div className="koreaName">{product.korean_name}</div>
      <div className="englishName">{product.english_name}</div>
      <div className="price">{Thousand.thousand(product.price)}</div>
    </>
  );
};

export default TendecyProduct;
