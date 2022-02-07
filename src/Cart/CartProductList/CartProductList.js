import React from 'react';

import './CartProductList.scss';

const CartProductList = ({ item, removeCart }) => {
  return (
    <div className="cartItem">
      <div className="itemImg">
        <img src="https://www.jomalone.co.kr/media/export/cms/products/100x100/jo_sku_L26L01_100x100_0.png" />
      </div>
      <div className="itemName">
        <p>{item.english_name}</p>
        <p>{item.korean_name}</p>
      </div>
      <div className="itemPrice">
        <span>
          ₩{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
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
      <div className="itemTotal">
        <p>₩199,000</p>
        <button
          onClick={() => {
            removeCart(item.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CartProductList;
