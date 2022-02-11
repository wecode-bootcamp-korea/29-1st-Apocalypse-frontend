import React, { useState } from 'react';
import './ProductDetailInfo.scss';

function ProductDetailInfo({ productDetail }) {
  const [viewInfo, setViewInfo] = useState(false);

  return (
    <div
      className="productDetailInfo"
      onClick={() => {
        setViewInfo(!viewInfo);
      }}
    >
      <div className="infoHeader">
        <h2 className="title">{productDetail.how_to_use}</h2>
        <button className="productInfoBtn">
          <i
            className={viewInfo ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}
          />
        </button>
      </div>
      {viewInfo && <p className="info">{productDetail.description}</p>}
    </div>
  );
}

export default ProductDetailInfo;
