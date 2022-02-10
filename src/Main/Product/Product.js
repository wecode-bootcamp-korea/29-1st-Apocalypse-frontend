import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Bookmark from '../Bookmark/Bookmark';
import './Product.scss';

function Product({ productList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ProductHover, setProductHover] = useState(false);
  const navigate = useNavigate('');

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setProductHover(false);
  };

  const goProductDetailPage = id => {
    navigate(`/ProductDetailPage/${id}`);
  };

  return (
    <div
      className="product"
      onMouseOver={() => setProductHover(true)}
      onMouseLeave={() => setProductHover(false)}
    >
      <div className="productBox">
        {ProductHover ? <Bookmark productList={productList} /> : ''}
        <img
          className="productImg"
          alt="img"
          src="https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFN01_670x670_0.png"
          onClick={() => goProductDetailPage(productList.id)}
        />
      </div>
      <p className="badge">필수품</p>
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
