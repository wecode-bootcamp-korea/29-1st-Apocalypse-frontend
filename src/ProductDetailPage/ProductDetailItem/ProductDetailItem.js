import React from 'react';
import './ProductDetailItem.scss';

function ProductDetailItem() {
  return (
    <div className="productDetailItem">
      <img
        className="productItemImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/spp/tasing_notes/desktop/Damask_Rose_Desktop.png"
      />
      <div className="notes">
        <p className="text">하트 노트</p>
        <p className="text">다마스크 로즈</p>
        <p className="text">
          꽃향기가 절정인 새벽녘에 장미를 따서 증류합니다. 향기가 펼쳐지면서
          스파이시함과 달콤함을 머금은 호화로운 꽃향기가 풍부한 질감으로 전체
          향을 감싸 안아줍니다.
        </p>
      </div>
    </div>
  );
}

export default ProductDetailItem;
