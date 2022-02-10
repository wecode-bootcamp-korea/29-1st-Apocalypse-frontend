import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CartProductList from './CartProductList/CartProductList';

import './Cart.scss';

function Cart() {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    fetch('http://3.34.199.69:8080/users/cart', {
      method: 'GET',
      headers: { Authorization: sessionStorage.getItem('LoginToken') },
    })
      .then(res => res.json())
      .then(result => {
        setCartItem(result.carts[0].cart);
        setTotalPrice(result.carts[0].total_price.total_price);
      });
  }, []);

  const checkPrice =
    cartItem.length === 0
      ? 0
      : parseInt(totalPrice)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="cartWrapper">
      <div className="cartContent">
        <div className="cartHeader">
          <h1>장바구니</h1>
          <p>({cartItem.length}개의 제품/장바구니에 담긴 제품 수량)</p>
        </div>
        <div className="cartProduct">
          <div className="cartLabel">
            <h5 className="product">제품</h5>
            <h5 className="price">가격</h5>
            <h5 className="quantity">수량</h5>
            <h5 className="totalPrice">총합계</h5>
          </div>
          <div className="cartItemList">
            {cartItem.map(cart => (
              <CartProductList
                cart={cart}
                key={cart.cart_id}
                totalPrice={totalPrice}
                setCartItem={setCartItem}
                setTotalPrice={setTotalPrice}
              />
            ))}
          </div>
        </div>
        <div className="cartTotal">
          <span>합계</span>
          <span>₩{checkPrice}</span>
        </div>
        <div className="cartFooter">
          <button className="goToMain" onClick={() => navigate('/')}>
            쇼핑계속하기
          </button>
          <button className="goToPay" onClick={() => navigate('')}>
            결제하기
          </button>
        </div>
      </div>

      <div className="cartSide">
        <div className="customService">
          <h1 className="serviceHeader">고객관리지원팀</h1>
          <div className="serviceContent">
            <p>
              "문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음
              링크"
              <br />
              <a href="https://www.google.co.kr/">customeCare@customCare</a>
              "를 눌러 이메일 문의 서비스로 보내주시면 응대를 도와드리겠습니다."
              <br />
              "현재 전화연결은 어려운 점 양해 부탁 드립니다."
              <br />
              "감사합니다."
            </p>
          </div>
        </div>
        <div className="billSummary">
          <h3>주문요약</h3>
          <p>장바구니에 담겨진 수량 {cartItem.length}</p>

          <div className="billPrice">
            <span>합계</span>
            <span>₩{checkPrice}</span>
          </div>
          <div className="deliveryFee">
            <span>배송비</span>
            <span>₩0</span>
          </div>
          <div className="billTotal">
            <span>총 합계</span>
            <span>₩{checkPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
