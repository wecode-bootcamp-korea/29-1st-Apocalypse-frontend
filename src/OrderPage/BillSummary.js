import React from 'react';
import './BillSummary.scss';

export default function BillSummary() {
  return (
    <div>
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
  );
}
