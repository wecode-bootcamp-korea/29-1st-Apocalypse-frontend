import React from 'react';
import MediaAsset from './MediaAsset/MediaAsset';
import MoreText from './MoreText/MoreText';
import Product from './Product/Product';
import Benefit from './Benefit/Benefit';
import Footer from '../components/Footer/Footer';
import './Main.scss';

function Main() {
  return (
    <>
      <main className="Main">
        <div className="nav" />
        <div className="mainVideo">
          <div className="text">
            <h1 className="title">Celebrating the Rose</h1>
            <MoreText />
          </div>
        </div>

        <div className="section1">
          <div className="product">
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
            src="https://www.jomalone.co.kr/media/export/cms/homepage/220117/FY22_ssb02_HOR_Lifestyle_00003_RGB_1998_150_DT_627x660.jpg"
          />
        </div>

        <div className="section2">
          <img
            className="seciton2Img"
            alt="img"
            src="https://www.jomalone.co.kr/media/export/cms/homepage/220117/FY22_ssb02_HOR_Campaign_000010_RGB-1998_72_DT_1254x560.jpg"
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
            <a className="left" href="/">
              <i class="fas fa-chevron-left" />
            </a>
            <Product />
            <Product />
            <Product />
            <Product />
            <a className="right" href="/">
              <i class="fas fa-chevron-right" />
            </a>
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
      <Footer />
    </>
  );
}

export default Main;
