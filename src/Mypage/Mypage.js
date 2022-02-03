import React from 'react';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import './Mypage.scss';

function Mypage() {
  return (
    <div className="myPage">
      <div className="wrapper">
        <div className="head">마이페이지</div>
        <div className="customerBox">
          <SignupPage />
          <SigninPage />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
