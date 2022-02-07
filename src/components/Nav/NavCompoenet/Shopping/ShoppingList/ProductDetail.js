import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  return (
    <div className="products">
      <Link to="/ProductDetailPage" className="openProductList">
        {productList.name}
      </Link>
    </div>
  );
};

export default ProductDetail;
