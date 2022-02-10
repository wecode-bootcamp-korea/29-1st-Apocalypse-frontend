import React, { useEffect, useState } from 'react';
import './BillSummary.scss';

export default function BillSummary() {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = [];
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    fetch('https://13.125.234.40:8080/users/cart', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.JjNCEJ0NmaTH_HnbLfDkJawTeXuO6ZXwKmlKWbJoDP8',
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result.carts[0]);
        setTotalPrice(result.carts[0].total_price.total_price);
      });
  }, []);

  return (
    <div className="billSummary">
      <h3>주문요약</h3>
      <p>장바구니에 담겨진 수량 10</p>

      <div className="billPrice">
        <span>합계</span>
        <span>₩{totalPrice}</span>
      </div>
      <div className="deliveryFee">
        <span>배송비</span>
        <span>₩0</span>
      </div>
      <div className="billTotal">
        <span>총 합계</span>
        <span>₩{totalPrice}</span>
      </div>
    </div>
  );
}
