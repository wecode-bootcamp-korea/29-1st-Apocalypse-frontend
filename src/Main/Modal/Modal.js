import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
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
              <p className="explain">{productList.description}</p>
              <p className="price">
                {' '}
                ₩
                {parseInt(productList.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <AddCartBtn />
              <div className="wishList">
                <Bookmark productList={productList} />
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
