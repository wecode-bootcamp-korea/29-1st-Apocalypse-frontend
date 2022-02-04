import React from 'react';

import './CartProductList.scss';

const CartProductList = () => {
  return (
    <div className="cartItem">
      <div className="itemImg">
        <img src="https://www.jomalone.co.kr/media/export/cms/products/100x100/jo_sku_L26L01_100x100_0.png" />
      </div>
      <div className="itemName">
        <p>잉글리쉬</p>
        <p>english</p>
      </div>
      <div className="itemPrice">
        <span>₩199,900</span>
      </div>
      <div className="itemQuantity">
        <select name="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="itemTotal">₩199,900</div>
    </div>
  );
};

export default CartProductList;
