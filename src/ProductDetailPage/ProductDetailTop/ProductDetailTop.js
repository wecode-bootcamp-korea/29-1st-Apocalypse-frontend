import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import './ProductDetailTop.scss';

function ProductDetailTop({ productList }) {
  return (
    <div className="productDetailTop">
      <div className="leftColumn">
        <img
          className="productImg"
          src="https://www.jomalone.co.kr/media/export/cms/products/1000x1000/jo_sku_LFFN01_1000x1000_0.png"
          alt="img"
        />
      </div>
      <div className="rightColumn">
        <p className="classify">신제품</p>
        <h2 className="korName">벨벳 로즈 앤 오드 리미티드 코롱 인텐스</h2>
        <h2 className="engName">Velvet Rose & Oud Limited Cologne Intense</h2>
        <p className="price">₩143,000</p>
        <a className="addReview" href="#">
          첫 리뷰 쓰기
        </a>
        <p className="explain">
          빛나는 매그놀리아와 장미가 만발하는 매혹적인 플로랄한 향의 이중주.
        </p>
        <div className="productSizeBox">
          <div className="productSize">
            <img
              className="productSmallImg"
              src="https://www.jomalone.co.kr/media/export/cms/products/1000x1000/jo_sku_LFFN01_1000x1000_0.png"
              alt="img"
            />
            <p className="sizeText">One Size</p>
          </div>
        </div>
        <AddCartBtn />
        <div className="wishList">
          <Bookmark />
          <p className="wishListText">위시리스트</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailTop;
