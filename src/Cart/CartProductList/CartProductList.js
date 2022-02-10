import React from 'react';

import './CartProductList.scss';

const CartProductList = ({ cart, setCartItem, setTotalPrice }) => {
  const sum = cart.price * cart.quantity;

  const onChangeCartQuantity = e => {
    fetch(`http://13.125.234.40:8080/users/cart/${e.currentTarget.id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.JjNCEJ0NmaTH_HnbLfDkJawTeXuO6ZXwKmlKWbJoDP8',
      },
      body: JSON.stringify({
        quantity: e.currentTarget.value,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'CHANGED_QUANTITY') {
          fetch('http://13.125.234.40:8080/users/cart', {
            method: 'GET',
            headers: {
              Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.JjNCEJ0NmaTH_HnbLfDkJawTeXuO6ZXwKmlKWbJoDP8',
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
    fetch(`http://13.125.234.40:8080/users/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.JjNCEJ0NmaTH_HnbLfDkJawTeXuO6ZXwKmlKWbJoDP8',
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'DELETE_CART') {
          fetch('http://13.125.234.40:8080/users/cart', {
            method: 'GET',
            headers: {
              Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.JjNCEJ0NmaTH_HnbLfDkJawTeXuO6ZXwKmlKWbJoDP8',
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
        <img src="{cart.images}" alt={cart.korean_name} />
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
