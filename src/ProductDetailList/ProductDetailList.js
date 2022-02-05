import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import './ProductDetailList.scss';

const ProductDetailList = () => {
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterBox, setFilterBox] = useState(false);
  const [filterProduct, setFilterProduct] = useState(new Set());
  const [rangeBox, setRangeBox] = useState(false);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(result => setFilterList(result.result));
  }, []);

  useEffect(() => {
    fetch('/data/commentDataList.json')
      .then(res => res.json())
      .then(result => setProductList(result.Product));
  }, []);

  const OpenFilterBox = () => {
    setFilterBox(filterBox => !filterBox);
  };

  const checkHandler = e => {
    doFilterProduct(e.target.checked, e.target.value);
    if (filterProduct.size === 0) {
      fetch(`http://192.168.0.55:8000/products`)
        .then(res => res.json())
        .then(result => {
          setProductList(result.Product);
        });
    } else {
      let filterProducts = [...filterProduct].join();
      fetch(`http://192.168.0.55:8000/products?category=${filterProducts}`)
        .then(res => res.json())
        .then(result => {
          setProductList(result.Product);
        });
    }
  };

  const doFilterProduct = (isChecked, checkFilterProduct) => {
    if (isChecked) {
      filterProduct.add(checkFilterProduct);
      setFilterProduct(filterProduct);
    } else if (!isChecked && filterProduct.has(checkFilterProduct)) {
      filterProduct.delete(checkFilterProduct);
      setFilterProduct(filterProduct);
    }
  };
  const OpenRangeBox = () => {
    setRangeBox(rangeBox => !rangeBox);
  };

  const ResetRange = () => {
    fetch('/data/commentDataList.json')
      .then(res => res.json())
      .then(result => setProductList(result.Product));
    OpenRangeBox();
  };

  const DoHighPrice = () => {
    setProductList(
      productList.sort((a, b) => {
        if (parseInt(a.price) > parseInt(b.price)) {
          return -1;
        }
        if (parseInt(a.price) < parseInt(b.price)) {
          return 1;
        }
        return 0;
      })
    );
    OpenRangeBox();
  };

  const DoLowPrice = () => {
    setProductList(
      productList.sort((a, b) => {
        if (parseInt(a.price) > parseInt(b.price)) {
          return 1;
        }
        if (parseInt(a.price) < parseInt(b.price)) {
          return -1;
        }
        return 0;
      })
    );
    OpenRangeBox();
  };

  return (
    <div className="totalProductDetailList">
      <div className="productDetailList">
        <div className="filters">
          <div className="filter">
            <button className="leftFilter" onClick={OpenFilterBox}>
              <div>필터:카테고리</div>
              <i
                className={
                  filterBox ? 'fas fa-sort-down rotate' : 'fas fa-sort-down'
                }
              />
            </button>
          </div>
          <button className="ranges" onClick={OpenRangeBox}>
            <div>정렬하기</div>
            <i
              className={
                rangeBox ? 'fas fa-sort-down rotate' : 'fas fa-sort-down'
              }
            />
          </button>
          <div className={rangeBox ? 'range' : 'rangeHide'}>
            <div onClick={ResetRange}>원래대로</div>
            <div onClick={DoHighPrice}>높은 가격순</div>
            <div onClick={DoLowPrice}>낮은 가격순</div>
          </div>
        </div>
        <div className={filterBox ? 'filterDetail' : 'filterDetailHide'}>
          <div className="filterBox">
            {filterList.length > 0 &&
              filterList.map(product => {
                return (
                  <label key={product.id} className="filter">
                    <input
                      type="checkbox"
                      value={product.category_name}
                      onChange={e => checkHandler(e)}
                    />
                    <div>{product.category_name}</div>
                  </label>
                );
              })}
          </div>
        </div>
      </div>
      <div className="productLists">
        {productList.length > 0 &&
          productList.map(product => {
            return <ProductList product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default ProductDetailList;
