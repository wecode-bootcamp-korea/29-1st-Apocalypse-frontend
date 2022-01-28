import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './Modal.scss';

function Modal(props) {
  const { open, close } = props;

  return (
    <div className="Modal">
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <div className="Preview">
            <button className="close" onClick={close}>
              <i class="fas fa-times" />
            </button>
            <img
              className="previewImg"
              src="https://www.jomalone.co.kr/media/export/cms/products/1000x1000/jo_sku_LFFN01_1000x1000_0.png"
              alt="img"
            />
            <div className="previewInfo">
              <p className="classify">신제품</p>
              <h2 className="previewTitle">로즈 앤 매그놀리아 리미티드 코롱</h2>
              <p className="explain">
                빛나는 매그놀리아와 장미가 만발하는 매혹적인 플로랄한 향의
                이중주.
              </p>
              <p className="price">₩143,000</p>
              <button className="addCart">장바구니 담기</button>
              <div className="wishList">
                <Bookmark />
                <p className="wishListText">위시리스트</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
