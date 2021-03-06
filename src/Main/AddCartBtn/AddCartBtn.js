import React from 'react';
import './AddCartBtn.scss';

function AddCartBtn({ onClick }) {
  return (
    <button className="addCartBtn" onClick={onClick}>
      장바구니 담기
    </button>
  );
}

export default AddCartBtn;
