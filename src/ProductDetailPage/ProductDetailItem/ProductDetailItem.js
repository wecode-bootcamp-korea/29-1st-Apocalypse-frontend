import React from 'react';
import './ProductDetailItem.scss';

function ProductDetailItem({ productDetail, data }) {
  // console.log(productDetail.components.name);
  return (
    <div className="productDetailItem">
      <img className="productItemImg" alt="img" src={data.images.image_url} />
      <div className="notes">
        <p className="text">
          {/* {productDetail.id && productDetail.components[0].name} */}
          {productDetail.name}
        </p>
      </div>
    </div>
  );
}

export default ProductDetailItem;
