import React from 'react';
import { useNavigate } from 'react-router';
import * as Thousand from '../../../../styles/thousand';

const TendecyProduct = ({ product }) => {
  const navigate = useNavigate();

  const gotoProductDetail = () => {
    navigate(`/ProductDetailPage/${product.id}`);
  };

  return (
    <div onClick={gotoProductDetail}>
      <img alt="KoreaName" src={product.image} />
      <div className="koreaName">{product.korean_name}</div>
      <div className="englishName">{product.english_name}</div>
      <div className="price">{Thousand.thousand(product.price)}</div>
    </div>
  );
};

export default TendecyProduct;
