import React from 'react';

const Searching = ({ product }) => {
  return (
    <div className="searching">
      <img alt="KoreaName" src="/images/test.jpg" />
      <div className="productName">{product.korean_name}</div>
    </div>
  );
};

export default Searching;
