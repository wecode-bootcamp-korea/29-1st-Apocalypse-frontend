import React from 'react';
import Product from './Product';
import './ShoppingList.scss';

const ShoppingList = ({ categoryName }) => {
  return (
    <div className="shoppingList">
      <img alt="testIMG" src="{categoryName.Name.subcategory_image}" />
      <div className="productList">
        <div className="subTitle">{categoryName.category_name}</div>
        {categoryName.subcategory_list.map(subcategoryList => {
          return (
            <Product
              subcategoryList={subcategoryList}
              key={subcategoryList.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
