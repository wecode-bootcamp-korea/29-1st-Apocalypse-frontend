import React from 'react';
import * as Thousand from '../../../../../styles/thousand';
import './BasketList.scss';

const BaketList = ({ basket, basketList, setBasketList, setTotalPrice }) => {
  const deleteBasket = id => {
    fetch('http://10.58.4.77:8000/users/cart', {
      method: 'DELETE',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
      body: JSON.stringify({
        cart_id: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'DELETE_CART') {
          setBasketList(basketList.filter(com => com.cart_id !== id));
          fetch('http://10.58.4.77:8000/users/cart', {
            method: 'get',
            headers: { Authorization: sessionStorage.getItem('LoginToken') },
          })
            .then(res => res.json())
            .then(result => {
              setBasketList(result.cart[0].cart);
              setTotalPrice(result.cart[0].total_price.total_price);
            });
        }
      });
  };

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
      <button onClick={() => deleteBasket(basket.cart_id)}>X</button>
      {/* <button className="test" value="4" id={basket.cart_id} onClick={test}>
        4
      </button> */}
    </div>
  );
};

export default BaketList;
