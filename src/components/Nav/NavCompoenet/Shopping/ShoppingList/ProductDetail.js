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
        style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
      >
        {productList.name}
      </Link>
    </div>
  );
};

export default ProductDetail;
