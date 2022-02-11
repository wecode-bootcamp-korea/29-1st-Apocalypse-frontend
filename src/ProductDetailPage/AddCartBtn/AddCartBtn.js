import React from 'react';
import { useNavigate } from 'react-router';
import UseLocalStorage from '../UseLocalStorage';
import './AddCartBtn.scss';

function AddCartBtn({ product }) {
  const navigate = useNavigate();
  const [addCart, setAddCart] = UseLocalStorage(`id${product.id}`, false);

  const clickCart = () => {
    if (sessionStorage.getItem('LoginToken')) {
      fetch('http://3.34.199.69:8080/users/cart', {
        method: 'POST',
        headers: { Authorization: sessionStorage.getItem('LoginToken') },
        body: JSON.stringify({
          product_id: product.id,
        }),
      })
        .then(res => res.json())
        .then(result => {
          if (result.message === 'ADD_CART') {
            document.body.style.overflow = 'unset';
            setAddCart(addCart => !addCart);
            navigate('/Cart');
          } else if (result.message === 'DOES_NOT_EXIST_IN_CART') {
            alert('장바구니에 담는데 실패했음');
          } else {
            document.body.style.overflow = 'unset';
            navigate('/Cart');
          }
        });
    } else {
      navigate('/MyPage');
    }
  };

  return (
    <button className="addCartBtn" onClick={clickCart}>
      장바구니 담기
    </button>
  );
}

export default AddCartBtn;
