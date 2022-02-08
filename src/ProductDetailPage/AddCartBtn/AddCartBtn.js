import React from 'react';
import './AddCartBtn.scss';

function AddCartBtn({ clickCart }) {
  return (
    <button className="addCartBtn" onClick={clickCart}>
      장바구니 담기
    </button>
  );
}

export default AddCartBtn;
