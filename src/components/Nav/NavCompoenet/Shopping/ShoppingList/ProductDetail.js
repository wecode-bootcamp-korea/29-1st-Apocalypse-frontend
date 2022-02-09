import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  return (
    <div className="products">
      <Link
        to={{
          pathname: '/ProductDetailPage',
          state: { name: productList.name },
        }}
        className="openProductList"
      >
        {productList.name}
      </Link>
    </div>
  );
};

export default ProductDetail;
