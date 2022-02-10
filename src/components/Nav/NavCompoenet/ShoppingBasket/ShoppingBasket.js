import React, { useState, useEffect } from 'react';
import BaketList from './BasketList/BaketList';
import * as Thousand from '../../../../styles/thousand';
import './ShoppingBasket.scss';

const ShoppingBasket = () => {
  const [basketList, setBasketList] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  // useEffect(() => {
  //   fetch('/data/commentDataListBasket.json')
  //     .then(res => res.json())
  //     .then(result => setBasketList(result.Product));
  // }, []);

  useEffect(() => {
    fetch('http://13.125.234.40:8080/users/cart', {
      method: 'get',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    })
      .then(res => res.json())
      .then(result => {
        setBasketList(result.carts[0].cart);
        setTotalPrice(result.carts[0].total_price.total_price);
      });
  }, []);

  const totalQuantity = () => {
    let totalQuantityResult = 0;
    basketList.map(com => (totalQuantityResult += com.quantity));
    return totalQuantityResult;
  };

  return (
    <div className="shoppingBasketNav">
      <div className="title">장바구니</div>
      {sessionStorage.getItem('LoginToken') ? (
        basketList.length > 0 ? (
          <>
            <div className="totalbasketList">
              {basketList.map(com => {
                return (
                  <BaketList
                    key={com.cart_id}
                    basket={com}
                    basketList={basketList}
                    setBasketList={setBasketList}
                    setTotalPrice={setTotalPrice}
                  />
                );
              })}
            </div>
            <div className="totoalBaket">
              <div className="totalQuantity">총 수량: {totalQuantity()}</div>
              <div className="totalPrice">
                총 합계: {Thousand.thousand(totalPrice)}
              </div>
              <button>결제하기</button>
            </div>
          </>
        ) : (
          <div className="content">장바구니가 비었습니다.</div>
        )
      ) : (
        <div className="content">장바구니가 비었습니다.</div>
      )}
    </div>
  );
};

export default ShoppingBasket;
