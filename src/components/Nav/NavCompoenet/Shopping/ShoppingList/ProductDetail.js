import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  const navigate = useNavigate('');

  const goProductDetailPage = id => {
    // window.location.replace(`/ProductDetailPage/${id}`);
    navigate(`/ProductDetailPage/${id}`);
  };

  return (
    <div
      className="products"
      onClick={() => goProductDetailPage(productList.id)}
    >
      {productList.name}
    </div>
  );
};

export default ProductDetail;
