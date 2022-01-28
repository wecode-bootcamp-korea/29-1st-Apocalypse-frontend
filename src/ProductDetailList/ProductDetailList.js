import React, { useState, useEffect } from 'react';

import Nav from '../components/Nav/Nav';
import ProductList from './ProductList/ProductList';
import './ProductDetailList.scss';
const ProductDetailList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('/data/commentDataList.json')
      .then(res => res.json())
      .then(result => setProductList(result.Product));
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  // const [tests, setTests] = useState([]);

  // const test = e => {
  //   setIsChecked(isChecked => !isChecked);
  //   console.log(!isChecked);
  //   console.log(e.target.value);
  //   if (isChecked) {
  //     setTests([...tests, e.target.value]);
  //   }
  //   console.log(tests);
  // };

  const checkHandler = ({ target }) => {
    setIsChecked(isChecked => !isChecked);
    console.log(isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  console.log(checkedItems);
  return (
    <>
      <Nav />
      <div className="productDetailList">
        <div className="filters">
          <div className="filter">
            <div className="leftFilter">필터: 센트</div>
            <div className="rightFilter">필터: 제품카테고리</div>
          </div>
          <div className="range">정렬하기</div>
        </div>
        <div className="filterDetail">
          <div className="filter1">
            <div className="filter10">
              {productList.length > 0 &&
                productList.map(product => {
                  return (
                    <label key={product.id} className="filter10">
                      <input
                        type="checkbox"
                        value={product.Korea}
                        // onClick={test}
                        onChange={e => checkHandler(e)}
                      />
                      <div>{product.Korea}</div>
                    </label>
                  );
                })}
            </div>
          </div>
          <div className="filter2">
            <div className="filter10">
              <input type="checkbox" value="1" />
              <div>asd</div>
            </div>
            <div className="filter10">
              <input type="checkbox" value="2" />
              <div>asd</div>
            </div>
            <div className="filter10">
              <input type="checkbox" value="3" />
              <div>asd</div>
            </div>
            <div className="filter10">
              <input type="checkbox" value="4" />
              <div>asd</div>
            </div>
            <div className="filter10">
              <input type="checkbox" value="5" />
              <div>asd</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productLists">
        {productList.length > 0 &&
          productList.map(product => {
            return <ProductList product={product} key={product.id} />;
          })}
      </div>
    </>
  );
};

export default ProductDetailList;
