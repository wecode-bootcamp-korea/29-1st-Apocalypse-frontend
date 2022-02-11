import React from 'react';
import { useNavigate } from 'react-router';

const Searching = ({ product }) => {
  const navigate = useNavigate('');

  const goProductDetail = id => {
    // window.location.replace(`/ProductDetailPage/${id}`);
    navigate(`/ProductDetailPage/${id}`);
  };

  return (
    <div className="searching" onClick={() => goProductDetail(product.id)}>
      <img alt="KoreaName" src={product.image} />
      <div className="productName">{product.korean_name}</div>
    </div>
  );
};

export default Searching;
