import React, { useState, useEffect } from 'react';

import './CartProductList.scss';

const CartProductList = ({ cart, setCartItem, setTotalPrice, total_price }) => {
  const sum = cart.price * cart.quantity;

  const onChangeCartQuantity = e => {
    fetch(`http://10.58.4.77:8000/users/cart/${e.currentTarget.id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.yp45-DVxcHYTfq0-UHBJp9rHnGtuKtolSwPEjCiXLS0',
      },
      body: JSON.stringify({
        quantity: e.currentTarget.value,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'CHANGED_QUANTITY') {
          fetch('http://10.58.4.77:8000/users/cart', {
            method: 'GET',
            headers: {
              Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.yp45-DVxcHYTfq0-UHBJp9rHnGtuKtolSwPEjCiXLS0',
            },
          })
            .then(res => res.json())
            .then(result => {
              setCartItem(result.carts[0].cart);
              setTotalPrice(result.carts[0].total_price.total_price);
            });
        }
      });
  };

  const removeCart = id => {
    fetch(`http://10.58.4.77:8000/users/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.yp45-DVxcHYTfq0-UHBJp9rHnGtuKtolSwPEjCiXLS0',
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'DELETE_CART') {
          fetch('http://10.58.4.77:8000/users/cart', {
            method: 'GET',
            headers: {
              Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.yp45-DVxcHYTfq0-UHBJp9rHnGtuKtolSwPEjCiXLS0',
            },
          })
            .then(res => res.json())
            .then(result => {
              setCartItem(result.carts[0].cart);
              setTotalPrice(result.carts[0].total_price.total_price);
            });
        }
      });
  };

  return (
    <div className="cartItem">
      <div className="itemImg">
        <img src="https://www.jomalone.co.kr/media/export/cms/products/100x100/jo_sku_L26L01_100x100_0.png" />
      </div>
      <div className="itemName">
        <p>{cart.english_name}</p>
        <p>{cart.korean_name}</p>
      </div>
      <div className="itemPrice">
        <span>
          ₩
          {parseInt(cart.price)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>
      <div className="itemQuantity">
        <select
          defaultValue={cart.quantity}
          id={cart.cart_id}
          onChange={onChangeCartQuantity}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div className="itemTotal">
        <p>
          ₩
          {parseInt(sum)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <button
          onClick={() => {
            removeCart(cart.cart_id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CartProductList;
