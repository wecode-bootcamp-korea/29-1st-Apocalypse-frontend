import React from 'react';
import { useNavigate } from 'react-router';
import Bookmark from '../Bookmark/Bookmark';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import './Modal.scss';

function Modal({ productList, open, close }) {
  const navigate = useNavigate();

  const clickCart = () => {
    if (sessionStorage.getItem('LoginToken')) {
      fetch('http://3.34.199.69:8080/users/cart', {
        method: 'POST',
        headers: { Authorization: sessionStorage.getItem('LoginToken') },
        body: JSON.stringify({
          product_id: productList.id,
        }),
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          if (result.message === 'ADD_CART') {
            document.body.style.overflow = 'unset';
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
    <div className="modal">
      <div className={open && 'openModal modal'}>
        {open && (
          <div className="preview">
            <button className="close" onClick={close}>
              <i class="fas fa-times" />
            </button>
            <img className="previewImg" src={productList.image} alt="img" />
            <div className="previewInfo">
              <p className="classify">필수품</p>
              <h2 className="previewTitle">{productList.korean_name}</h2>
              <p className="explain">{productList.description}</p>
              <p className="price">
                {' '}
                ₩
                {parseInt(productList.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <AddCartBtn onClick={clickCart} />
              <div className="wishList">
                <Bookmark productList={productList} />
                <p className="wishListText">위시리스트</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
