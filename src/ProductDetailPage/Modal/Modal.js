import React from 'react';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import Bookmark from '../Bookmark/Bookmark';
import './Modal.scss';

function Modal({ productList, open, close }) {
  return (
    <div className="modal">
      <div className={open && 'openModal modal'}>
        {open && (
          <div className="preview">
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
              <h2 className="previewTitle">{productList.korean_name}</h2>
              <p className="explain">
                빛나는 매그놀리아와 장미가 만발하는 매혹적인 플로랄한 향의
                이중주.
              </p>
              <p className="price">₩143,000</p>
              <AddCartBtn />
              <div className="wishList">
                <Bookmark />
                <p className="wishListText">위시리스트</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
