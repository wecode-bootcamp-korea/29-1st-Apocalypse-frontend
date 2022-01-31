import react from 'react';
import './ProductInfo.scss';

function ProductInfo() {
  return (
    <div className="productInfo">
      <div className="ingredient">
        <h2 className="title">성분</h2>
      </div>
      <div className="productInfoBtn">
        <i class="fas fa-chevron-down" />
      </div>
    </div>
  );
}

export default ProductInfo;
