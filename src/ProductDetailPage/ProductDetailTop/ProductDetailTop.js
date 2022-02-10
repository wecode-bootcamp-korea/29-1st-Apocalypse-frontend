import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import './ProductDetailTop.scss';

function ProductDetailTop({ productDetail }) {
  return (
    <div className="productDetailTop">
      <div className="leftColumn">
        {productDetail && (
          <img className="productImg" src={productDetail.images} alt="img" />
        )}
      </div>
      <div className="rightColumn">
        <p className="classify">신제품</p>
        <h2 className="korName">{productDetail.korean_name}</h2>
        <h2 className="engName">{productDetail.english_name}</h2>
        <p className="price">
          {' '}
          ₩
          {parseInt(productDetail.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <a className="addReview" href="#">
          첫 리뷰 쓰기
        </a>
        <p className="explain">{productDetail.description}</p>
        <div className="productSizeBox">
          <div className="productSize">
            {productDetail && (
              <img
                className="productSmallImg"
                src={productDetail.images}
                alt="img"
              />
            )}
            <p className="sizeText">One Size</p>
          </div>
        </div>
        <AddCartBtn product={productDetail} />
        <div className="wishList">
          <Bookmark product={productDetail} />
          <p className="wishListText">위시리스트</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailTop;
