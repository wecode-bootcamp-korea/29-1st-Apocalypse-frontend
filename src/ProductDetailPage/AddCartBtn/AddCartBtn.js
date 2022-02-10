import React from 'react';
import UseLocalStorage from '../UseLocalStorage';
import './AddCartBtn.scss';

function AddCartBtn({ product }) {
  const [addCart, setAddCart] = UseLocalStorage(`id${product.id}`, false);

  const clickCart = () => {
    setAddCart(addCart => !addCart);
    alert('상품이 장바구니에 담겼습니다.');
  };

  return (
    <button className="addCartBtn" onClick={clickCart}>
      장바구니 담기
    </button>
  );
}

export default AddCartBtn;
