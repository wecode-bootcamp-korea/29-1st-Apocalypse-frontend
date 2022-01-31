import React from 'react';
import './ProductDetailPage.scss';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductItem from './ProductItem/ProductItem';

function ProductDetailPage() {
  return (
    <div className="productDetailPage">
      <div className="nav" />
      <img
        className="headerImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/campaigns/house_of_roses/spp/22B02_Roses_SPP-Banner-Velvet-Rose-Desktop.jpg"
      />
      <div className="productFull">
        <div className="product">
          <div className="imgWrapper">
            <img
              className="productImg"
              alt="img"
              src="https://www.jomalone.co.kr/media/export/cms/products/1000x1000/jo_sku_LFFP01_1000x1000_0.png"
            />
            <a className="share">공유하기</a>
          </div>
          <div className="right">
            <p className="classify">신제품</p>
            <h2 className="korName">벨벳 로즈 앤 오드 리미티드 코롱 인텐스</h2>
            <h2 className="engName">
              Velvet Rose & Oud Limited Cologne Intense
            </h2>
            <p className="price">₩143,000</p>
            <a className="addReview">첫 리뷰 쓰기</a>
            <p className="explain">
              온라인 부티크 단독 가장 어두운 다마스크 로즈. 풍부하고 감각적인 이
              향을 스모키 한 우드로 감싸고 있으며,
            </p>
            <img
              className="smallProductImg"
              alt="img"
              src="https://www.jomalone.co.kr/media/export/cms/products/1000x1000/jo_sku_LFFP01_1000x1000_0.png"
            />
            <button className="addCart">장바구니 담기</button>
            <div className="wishList">
              {/* <Bookmark /> */}
              <p className="wishListText">위시리스트</p>
            </div>
          </div>
        </div>
        <ProductInfo />
        <ProductInfo />
      </div>

      <div className="productItemList">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="line" />
      <div className="ingredientDetail">
        <div className="ingredientItem"></div>
      </div>
      <img
        className="lazyImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/campaigns/house_of_roses/spp/spp_tout_1920x824_DT.jpg"
      />
      <div className="review">
        <h2 className="title">리뷰</h2>
      </div>
    </div>
  );
}

export default ProductDetailPage;
