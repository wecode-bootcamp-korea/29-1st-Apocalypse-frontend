import React, { useEffect, useState, useRef } from 'react';
import MediaAsset from './MediaAsset/MediaAsset';
import MoreText from './MoreText/MoreText';
import Product from './Product/Product';
import Benefit from './Benefit/Benefit';
import './Main.scss';

import Nav from '../components/Nav/Nav';

function Main() {

  const [product, setProduct] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data.list);
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

  return (
    <main className="main">
 
      <div className="mainVideo">
        <div className="text">
          <h1 className="title">Celebrating the Rose</h1>
          <MoreText />
        </div>
      </div>

      <div className="section1">
        <div className="productBox">
          <img
            className="productImg"
            alt="img"
            src="https://www.jomalone.co.kr/media/export/cms/homepage/220117/jo_sku_LFFN01_DT_750x415.png"
          />
          <h2 className="title">로즈 앤 매그놀리아 리미티드 코롱</h2>
          <MoreText />
        </div>
        <img
          className="section1Img"
          alt="img"
          src="https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />
      </div>

      <div className="section2">
        <img
          className="seciton2Img"
          alt="img"
          src="https://images.unsplash.com/photo-1561323577-5b76286cb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3574&q=80"
        />
        <div className="text">
          <h1 className="title">벨벳 로즈 앤 오드 리미티드 코롱 인텐스</h1>
          <MoreText />
        </div>
      </div>

      <div className="section3">
        <MediaAsset />
        <MediaAsset />
      </div>

      <div className="section4">
        <h1 className="title">완벽한 선물</h1>
        <div className="productList">
          <button className="arrow" onClick={handleLeftClick}>
            <i class="fas fa-chevron-left" />
          </button>
          <div className="carousel" ref={carousel}>
            {product.length > 0 &&
              product.map(com => {
                return <Product productList={com} key={com.id} />;
              })}
          </div>
          <button className="arrow" onClick={handleRightClick}>
            <i class="fas fa-chevron-right" />
          </button>
        </div>
      </div>

      <div className="section5">
        <MediaAsset />
        <MediaAsset />
      </div>

      <div className="section6">
        <Benefit />
        <div className="line" />
        <Benefit />
        <div className="line" />
        <Benefit />
      </div>
    </main>
  );
}

export default Main;
