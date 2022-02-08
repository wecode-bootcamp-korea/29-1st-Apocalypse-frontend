import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Benefit from './Benefit/Benefit';
import Product from './Product/Product';
import ProductDetailTop from './ProductDetailTop/ProductDetailTop';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailItem from './ProductDetailItem/ProductDetailItem';
import './ProductDetailPage.scss';

function ProductDetailPage() {
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://10.58.4.77:8000/products?category=무기')
      .then(res => res.json())
      .then(data => {
        setProduct(data.Product);
      });
  }, []);

  useEffect(() => {
    fetch('http://10.58.4.77:8000/products/1')
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.product);
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

  // if (!product || !product.length) return null;

  return (
    <div className="productDetailPage">
      <img
        className="headerImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/campaigns/house_of_roses/spp/22B02_Roses_SPP-Banner-Velvet-Rose-Desktop.jpg"
      />
      <div className="breadCrumbs">
        <Link to="/" className="breadCrumbsItem">
          홈
        </Link>

        <p className="delimiter">/</p>
        <Link to="/" className="breadCrumbsItem" href="#">
          코롱
        </Link>
      </div>
      <div className="productFull">
        <ProductDetailTop productDetail={productDetail} />
        <ProductDetailInfo productDetail={productDetail} />
      </div>

      <div className="productItemList">
        <ProductDetailItem productDetail={productDetail} />
        <ProductDetailItem productDetail={productDetail} />
      </div>

      <div className="line" />
      <img
        className="lazyImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/campaigns/house_of_roses/spp/spp_tout_1920x824_DT.jpg"
      />

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

      <div className="benefitList">
        <Benefit />
        <div className="line" />
        <Benefit />
        <div className="line" />
        <Benefit />
      </div>
    </div>
  );
}

export default ProductDetailPage;
