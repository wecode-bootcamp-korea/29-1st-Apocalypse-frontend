import React, { useEffect, useState } from 'react';

import './Cart.scss';

function Cart() {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartItem(data);
      });
  }, []);

  return (
    <div className="cartWrapper">
      <div className="cartContent">
        <div className="cartHeader">
          <h1>장바구니</h1>
        </div>
        <div className="cartProduct">
          <div className="cartLabel">
            <h5 className="product">제품</h5>
            <h5 className="price">가격</h5>
            <h5 className="quantity">수량</h5>
            <h5 className="totalPrice">총합계</h5>
          </div>
        </div>
        <div className="cartTotal">
          <span>합계</span>
          <span>₩300,000</span>
        </div>
        <div className="cartFooter">
          <a href="#">쇼핑계속하기</a>
          <button>결제하기</button>
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
              <a href="#">customeCare@customCare</a>
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
          <p>장바구니에 담겨진 수량 10</p>

          <div className="billPrice">
            <span>합계</span>
            <span>₩540,000</span>
          </div>
          <div className="deliveryFee">
            <span>배송비</span>
            <span>₩0</span>
          </div>
          <div className="billTotal">
            <span>총 합계</span>
            <span>₩542,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
