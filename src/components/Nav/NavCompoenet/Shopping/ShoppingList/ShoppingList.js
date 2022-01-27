import React from 'react';

import Product from './Product';

import './ShoppingList.scss';

const ShoppingList = ({ categoryName }) => {
  // const [subTitle, setSubTitle] = useState(categoryName);
  return (
    <div className="shoppingList">
      <img alt="testIMG" src="/images/test.jpg" />
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
