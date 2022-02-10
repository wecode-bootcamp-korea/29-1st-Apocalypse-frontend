import React from 'react';

import './LoginWishList.scss';

function LoginWishList() {
  return (
    <div className="LoginWishList">
      <div className="LoginWishListHeader">
        <h2 className="LoginWishTitle">관심상품 전체 보기</h2>
      </div>
      <div className="LoginWishListProduct">
        <div className="productPic">
          <img src="https://www.jomalone.co.kr/media/export/cms/products/100x100/jo_sku_L26L01_100x100_0.png" />
        </div>
        <div className="productInfo">
          <p>English Pear & Freesia Cologne</p>
          <p>잉글리쉬 페어 앤 프리지아 코롱</p>
          <p>100ml</p>
        </div>
        <div className="productPrice">
          <span>₩199,000</span>
        </div>
        <div className="forwardCart">
          <form>
            <button className="goToCart">장바구니 담기</button>
            {/* <button>삭제</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginWishList;
