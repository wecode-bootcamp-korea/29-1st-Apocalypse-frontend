import React from 'react';
import './ProductDetailItem.scss';

function ProductDetailItem({ productDetail, data }) {
  return (
    <div className="productDetailItem">
      <img className="productItemImg" alt="img" src={data.images.image_url} />
      <div className="notes">
        <p className="text">{productDetail.name}</p>
      </div>
    </div>
  );
}

export default ProductDetailItem;
