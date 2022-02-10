import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingList from './ShoppingList/ShoppingList';
import './Shopping.scss';

const Shopping = () => {
  const [productList, setProductList] = useState('');

  useEffect(() => {
    fetch('http://13.125.234.40:8080/products/categories')
      .then(res => res.json())
      .then(result => {
        setProductList(result.Category);
      });
  }, []);

  return (
    <div className="shoppingNav">
      <div className="mainTitle">
        <Link
          to={{
            pathname: '/ProductDetailList',
            state: { name: 'test' },
          }}
          className="goProductDetailList"
        >
          상품목록
        </Link>
      </div>
      <div className="category">
        {productList &&
          productList.map(categoryName => {
            return (
              <ShoppingList categoryName={categoryName} key={categoryName.id} />
            );
          })}
      </div>
    </div>
  );
};

export default Shopping;
