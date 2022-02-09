import React, { useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Modal from '../Modal/Modal';
import './Product.scss';

function Product({ productList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ProductHover, setProductHover] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div
      className="mainProduct"
      onMouseOver={() => setProductHover(true)}
      onMouseLeave={() => setProductHover(false)}
    >
      <div className="productBox">
        {ProductHover ? <Bookmark productList={productList} /> : ''}
        <img
          className="productImg"
          alt="img"
          src="https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFN01_670x670_0.png"
        />
      </div>
      <p className="badge">신제품</p>
      <div className="productInfo">
        <p className="korName">{productList.korean_name}</p>
        <p className="engName">{productList.english_name}</p>
        <p className="price">
          ₩
          {parseInt(productList.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <button className="previewBtn" onClick={openModal}>
          미리보기
        </button>
        <Modal open={modalOpen} close={closeModal} productList={productList} />
      </div>
    </div>
  );
}

export default Product;
