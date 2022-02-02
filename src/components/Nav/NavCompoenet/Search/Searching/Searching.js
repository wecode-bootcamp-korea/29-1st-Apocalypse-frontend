import React from 'react';

const Searching = ({ product }) => {
  return (
    <div className="searching">
      <img alt="KoreaName" src="/images/test.jpg" />
      <div className="productName">{product.Korea}</div>
    </div>
  );
};

export default Searching;
