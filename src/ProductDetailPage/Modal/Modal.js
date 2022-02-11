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
              <i className="fas fa-times" />
            </button>
            <img className="previewImg" src={productList.image} alt="img" />
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
              <AddCartBtn product={productList} />
              <div className="wishList">
                <Bookmark product={productList} />
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
