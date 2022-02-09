import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderStatus from './OrderStatus';
import CustomerService from './CustomerService';
import BillSummary from './BillSummary';
import './OrderPage.scss';

const OrderPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    post: '',
    adress: '',
    detailAdress: '',
    delivery: '',
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="orderWrapper">
      <div className="orderContent">
        <div className="orderHeader">
          <h1>주문하기</h1>
        </div>
        <OrderStatus />
        <div className="adressAndGift">
          <h3>배송지 정보</h3>
          <div className="userName">이름</div>
          <input
            className="inputUsername"
            type="text"
            name="name"
            onChange={handleInfo}
          />
          <div className="userName">우편번호</div>
          <input
            className="inputUserPost"
            type="text"
            name="post"
            onChange={handleInfo}
          />
          <button className="postBtn">우편번호 검색</button>
          <div className="userName">주소</div>
          <input
            className="inputUserAdress"
            type="text"
            name="adress"
            onChange={handleInfo}
          />
          <div className="userName">상세 주소</div>
          <input
            className="inputUserDetail"
            type="text"
            name="detailAdress"
            onChange={handleInfo}
          />
          <div className="delivery">배송 요청 사항</div>
          <input
            className="deliveryOrder"
            type="text"
            placeholder="배송요청사항"
            name="delivery"
            onChange={handleInfo}
          />
          <div>
            <Link to="/OrderReview" state={{ data: userInfo }}>
              <button className="payment">결제하기</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="orderSide">
        <CustomerService />
        <BillSummary />
      </div>
    </div>
  );
};

export default OrderPage;
