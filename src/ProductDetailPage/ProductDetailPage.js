import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  const params = useParams('');

  useEffect(() => {
    fetch('http://3.34.199.69:8080/products?category=무기')
      .then(res => res.json())
      .then(data => {
        setProduct(data.Product);
      });
  }, []);

  useEffect(() => {
    fetch(`http://3.34.199.69:8080/products/${params.productid}`)
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.product);
      });
  }, [params]);

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
        src="https://images.unsplash.com/photo-1614278396392-7df3d46ce5f9?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="breadCrumbs">
        <Link to="/" className="breadCrumbsItem">
          홈
        </Link>

        <p className="delimiter">/</p>
        <Link to="/" className="breadCrumbsItem" href="#">
          전체
        </Link>
      </div>
      <div className="productFull">
        {productDetail && <ProductDetailTop productDetail={productDetail} />}
        <ProductDetailInfo productDetail={productDetail} />
      </div>

      <div className="productItemList">
        {productDetail.id &&
          productDetail.components.map(com => {
            return (
              <ProductDetailItem
                productDetail={com}
                data={productDetail}
                key={com.id}
              />
            );
          })}
      </div>

      <div className="line" />
      <img
        className="lazyImg"
        alt="img"
        src="https://images.unsplash.com/photo-1580741569354-08feedd159f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
      </div>
    </div>
  );
}

export default ProductDetailPage;
