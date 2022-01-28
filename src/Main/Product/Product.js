import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Bookmark from '../Bookmark/Bookmark';
import './Product.scss';

function Product(props) {
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
      className="MainProduct"
      onMouseOver={() => setProductHover(true)}
      onMouseOut={() => setProductHover(false)}
    >
      <div className="productBox">
        {ProductHover ? <Bookmark /> : ''}
        <img
          className="productImg"
          alt="img"
          src="https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFN01_670x670_0.png"
        />
      </div>
      <p className="badge">신제품</p>
      <div className="productInfo">
        <p className="korName">벨벳 로즈 앤 오드 리미티드 코롱 인텐스</p>
        <p className="engName">Rose $ Magnolia Limited Cologne</p>
        <p className="price">₩143,000</p>
        <button className="previewBtn" onClick={openModal}>
          미리보기
        </button>
        <Modal open={modalOpen} close={closeModal} />
      </div>
    </div>
  );
}

export default Product;
