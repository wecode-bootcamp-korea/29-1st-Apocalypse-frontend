import React from 'react';
import * as Thousand from '../../../../../styles/thousand';
import './BasketList.scss';

const BaketList = ({ basket, basketList, setBasketList }) => {
  const deleteBasket = id => {
    setBasketList(basketList.filter(com => com.id !== id));
  };

  // const test = e => {
  //   const test1 = e.target.id - 1;
  //   basketList[test1].quantity = parseInt(e.target.value);
  //   setBasketList(basketList => {
  //     return basketList;
  //   });
  // };

  return (
    <div className="basketList">
      <img alt="/images/test.jpg" src="/images/test.jpg" />
      <div className="productInfo">
        <div className="koreanName">{basket.korean_name}</div>
        <div className="quantity">수량: {basket.quantity}</div>
        <div className="price">
          {Thousand.thousand(basket.price * basket.quantity)}
        </div>
      </div>
      <button onClick={() => deleteBasket(basket.id)}>X</button>
      {/* <button className="test" value="4" id={basket.id} onClick={test}>
        4
      </button> */}
    </div>
  );
};

export default BaketList;
