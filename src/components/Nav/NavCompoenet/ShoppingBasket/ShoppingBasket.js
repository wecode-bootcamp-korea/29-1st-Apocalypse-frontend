import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import BaketList from './BasketList/BaketList';
import * as Thousand from '../../../../styles/thousand';
import './ShoppingBasket.scss';

const ShoppingBasket = () => {
  const navigate = useNavigate();
  const [basketList, setBasketList] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [deleteCom, setDeleteCom] = useState('');

  useEffect(() => {
    fetch('http://3.34.199.69:8080/users/cart', {
      method: 'get',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    })
      .then(res => res.json())
      .then(result => {
        console.log(basketList);
        setBasketList(result.carts[0].cart);
        setTotalPrice(result.carts[0].total_price.total_price);
      });
  }, []);

  const totalQuantity = () => {
    let totalQuantityResult = 0;
    basketList.map(com => (totalQuantityResult += com.quantity));
    return totalQuantityResult;
  };

  const goToCart = () => {
    navigate('/Cart');
  };

  return (
    <div className="shoppingBasketNav">
      <div className="titleShoppingBasket">장바구니</div>
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
                    setDeleteCom={setDeleteCom}
                  />
                );
              })}
            </div>
            <div className="totoalBaket">
              <div className="totalQuantity">총 수량: {totalQuantity()}</div>
              <div className="totalPrice">
                총 합계: {Thousand.thousand(totalPrice)}
              </div>
              <button onClick={goToCart}>결제하기</button>
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
