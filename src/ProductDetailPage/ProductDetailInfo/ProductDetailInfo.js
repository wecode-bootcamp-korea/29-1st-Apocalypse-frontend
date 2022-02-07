import React, { useState } from 'react';
import './ProductDetailInfo.scss';

function ProductDetailInfo() {
  const [viewInfo, setViewInfo] = useState(false);

  return (
    <div
      className="productDetailInfo"
      onClick={() => {
        setViewInfo(!viewInfo);
      }}
    >
      <div className="infoHeader">
        <h2 className="title">성분</h2>
        <button className="productInfoBtn">
          {viewInfo ? (
            <i class="fas fa-chevron-down" />
          ) : (
            <i class="fas fa-chevron-up" />
          )}
        </button>
      </div>
      {viewInfo && (
        <p className="info">
          전성분:변성알코올,정제수,향료,제라니올,리날룰,벤질살리실레이트,알파-아이소메틸아이오논,시트로넬올,유제놀,비에이치티,시트랄,벤질알코올,하이드록시시트로넬알
          [ILN43078] *제공된 성분은 동일 제품이라도 경우에 따라 변경될 수
          있습니다. 최신정보는 제품 포장의 성분을 참고하시거나 본사
          고객관리지원팀으로 연락 부탁 드립니다.
        </p>
      )}
    </div>
  );
}

export default ProductDetailInfo;
