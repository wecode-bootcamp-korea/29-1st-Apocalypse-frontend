import React from 'react';
import * as Thousand from '../../../../../styles/thousand';
import './BasketList.scss';

const BaketList = ({ basket, setBasketList, setTotalPrice }) => {
  const deleteBasket = id => {
    fetch(`http://3.34.199.69:8080/users/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    })
      .then(res => res.json())
      .then(result => {
        window.location.replace('');
        if (result.message === 'DELETE_CART') {
          fetch('http://3.34.199.69:8080/users/cart', {
            method: 'get',
            headers: { Authorization: sessionStorage.getItem('LoginToken') },
          })
            .then(res => res.json())
            .then(result => {
              setBasketList(result.carts[0].cart);
              setTotalPrice(result.carts[0].total_price.total_price);
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
    </div>
  );
};

export default BaketList;
