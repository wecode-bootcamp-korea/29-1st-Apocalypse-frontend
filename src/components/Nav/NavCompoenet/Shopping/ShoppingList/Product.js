import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const Product = ({ subcategoryList }) => {
  const [productDetail, setProductDetail] = useState(false);

  const OpenProduct = () => {
    setProductDetail(productDetail => !productDetail);
  };

  return (
    <div className="product">
      <div className="productSub" onClick={OpenProduct}>
        {subcategoryList.name}
      </div>
      <div className={productDetail ? 'productDetail' : 'productDetailHide'}>
        {subcategoryList.product_list.map(productList => {
          return (
            <ProductDetail productList={productList} key={productList.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
