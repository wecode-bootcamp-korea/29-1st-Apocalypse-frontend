import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaAsset from './MediaAsset/MediaAsset';
import MoreText from './MoreText/MoreText';
import Product from './Product/Product';
import Benefit from './Benefit/Benefit';
import MainSlider from './MainSlider/MainSlider';
import './Main.scss';

function Main() {
  const [product, setProduct] = useState([]);
  const carousel = useRef(null);
  const navigate = useNavigate('');

  useEffect(() => {
    fetch('http://13.125.234.40:8080/products?category=무기')
      .then(res => res.json())
      .then(data => {
        setProduct(data.Product);
      });
  }, []);

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!product || !product.length) return null;

  const goProductDetailPage = id => {
    navigate(`/ProductDetailPage/${id}`);
  };

  return (
    <main className="main">
      <MainSlider />
      <section className="section1">
        <div className="productBox">
          <img
            className="productImg"
            alt="img"
            src="https://www.jomalone.co.kr/media/export/cms/homepage/220117/jo_sku_LFFN01_DT_750x415.png"
          />
          <h2 className="title">{product[0].korean_name}</h2>
          <MoreText />
        </div>
        <img
          className="section1Img"
          alt="img"
          src="https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />
      </section>
      <section className="section2">
        <img
          className="seciton2Img"
          alt="img"
          src="https://images.unsplash.com/photo-1561323577-5b76286cb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3574&q=80"
        />
        <div className="text">
          <h1 className="title">혁명동지들을 위한 한정판</h1>
          <MoreText />
        </div>
      </section>

      <section className="section3">
        <MediaAsset />
        <MediaAsset />
      </section>

      <section className="section4">
        <h1 className="title">완벽한 무기</h1>
        <div className="productList">
          <button className="arrow" onClick={handleLeftClick}>
            <i className="fas fa-chevron-left" />
          </button>
          <div className="carousel" ref={carousel}>
            {product.length > 0 &&
              product.map(com => {
                return <Product productList={com} key={com.id} />;
              })}
          </div>
          <button className="arrow" onClick={handleRightClick}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </section>

      <section className="section5">
        <MediaAsset />
        <MediaAsset />
      </section>

      <section className="section6">
        <Benefit
          title="무기 포장"
          explain="시그니처 박스에 정성스럽게 포장해 드립니다."
        />
        <div className="line" />
        <Benefit title="체험" explain="종말론의 새로운 무기를 경험해보세요." />
        <div className="line" />
        <Benefit
          title="무료 배송"
          explain="파괴력 있는 무기를 전달해 드립니다."
        />
      </section>
    </main>
  );
}

export default Main;
