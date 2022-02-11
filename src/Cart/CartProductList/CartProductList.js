import React from 'react';

import './CartProductList.scss';

const CartProductList = ({ cart, setCartItem, setTotalPrice }) => {
  const sum = cart.price * cart.quantity;

  const onChangeCartQuantity = e => {
    fetch(`http://3.34.199.69:8080/users/cart/${e.currentTarget.id}`, {
      method: 'PATCH',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
      body: JSON.stringify({
        quantity: e.currentTarget.value,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'CHANGED_QUANTITY') {
          fetch('http://3.34.199.69:8080/users/cart', {
            method: 'GET',
            headers: { Authorization: sessionStorage.getItem('LoginToken') },
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
    fetch(`http://3.34.199.69:8080/users/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    });
    fetch('http://3.34.199.69:8080/users/cart', {
      method: 'GET',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    })
      .then(res => res.json())
      .then(result => {
        setCartItem(result.carts[0].cart);
        setTotalPrice(result.carts[0].total_price.total_price);
      });
  };

  return (
    <div className="cartItem">
      <div className="itemImg">
        <img src={cart.image} alt={cart.korean_name} />
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
          <option>7</option>
          <option>8</option>
          <option>9</option>
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
