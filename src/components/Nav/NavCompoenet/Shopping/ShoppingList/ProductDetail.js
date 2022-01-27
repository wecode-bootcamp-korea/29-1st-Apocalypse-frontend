import React from 'react';

import { Link } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  return (
    <div className="products">
      <Link
        to="/ProductDetailPage"
        style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
      >
        {productList.name}
      </Link>
    </div>
  );
};

export default ProductDetail;
