import React from 'react';

import './LoginOrderList.scss';

function LoginOrderList() {
  return (
    <div className="orderListContent">
      <div className="orderListHeader">
        <h2 className="orderListTitle">주문 전체 보기</h2>
      </div>
      <div className="orderListInfo">
        <p>
          주문하신 제품의 상세내역을 보시려면 아래 자세히 보기를 클릭해 주세요
        </p>
        <button className="orderListButton">과거 구매 상품 재주문</button>
        <table className="orderTable">
          <tbody>
            <tr className="orderLabel">
              <td>주문날짜</td>
              <td>주문번호</td>
              <td>주문상태</td>
              <td>송장번호</td>
            </tr>
            <tr className="orderContent">
              <td>2022/01/26</td>
              <td>
                1619688599 <a href="#">자세히 보기</a>
              </td>
              <td>취소완료</td>
              <td>H231231</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoginOrderList;
