import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomerService from './CustomerService';
import BillSummary from './BillSummary';
import OrderReviewComponent from './OrderReviewComponent';
import './OrderReview.scss';

const OrderReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const complete = () => {
    navigate('/Complete');
  };

  return (
    <div className="reviewWrapper">
      <div className="reviewContent">
        <div className="reviewHeader">
          <h1>주문검토</h1>
        </div>
        <div>
          <OrderReviewComponent />
        </div>
        <div className="orderWay">
          <form>
            <label className="checkSpace">
              <input type="radio" />
              <p>신용카드</p>
            </label>
            <label className="checkSpace">
              <input type="radio" />
              <p>무통장 입금</p>
            </label>
            <label className="checkSpace">
              <input type="radio" />
              <p>휴대폰 결제</p>
            </label>
            <label className="checkSpace">
              <input type="radio" />
              <p>Kakao Pay</p>
            </label>
          </form>
          <div className="orderInfo">
            <div className="orderText">배송지 정보</div>
            <div className="inputInfo">
              <div>{location.state.data.name}</div>
              <div>{location.state.data.post}</div>
              <div>{location.state.data.adress}</div>
              <div>{location.state.data.detailAdress}</div>
            </div>
          </div>
          <div className="orderInfo2">
            <div className="orderText">배송 요청 사항</div>
            <div className="inputInfo">
              <div>{location.state.data.delivery}</div>
            </div>
          </div>
          <div className="paymentspace">
            <button className="payment" onClick={complete}>
              결제하기
            </button>
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

export default OrderReview;
