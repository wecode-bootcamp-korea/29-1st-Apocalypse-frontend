import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ShoppingList from './ShoppingList/ShoppingList';
import './Shopping.scss';

const Shopping = () => {
  const [productList, setProductList] = useState('');

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(result => setProductList(result.result));
  }, []);

  return (
    <div className="shoppingNav">
      <div className="mainTitle">
        <Link
          to="/ProductDetailList"
          style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
        >
          상품목록
        </Link>
      </div>
      <div className="test">
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
