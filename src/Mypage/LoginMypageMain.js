import React from 'react';

import './LoginMypageMain.scss';

const LoginMypageMain = props => {
  return (
    <>
      <div className="mypageHeader">
        <h2 className="mypageTitle">내 정보 및 주문 관리</h2>
      </div>
      <div className="welcomeMsg">
        님, 환영합니다. 만약 이화종님이 아니라면,
        <a href="">여기를 클릭하십시오.</a>
      </div>
      <div className="myInfoContainer">
        <div className="firstLine">
          <div className="myInfo">
            <div className="myInfoTitle">
              <h3>나의정보</h3>
              <a href="">정보보기</a>
            </div>
            <div className="myInfoName">
              <p>이름 이화종</p>
            </div>
            <div className="myInfoAdress">
              <p>이메일 주소: hjlee1811@gamil.com</p>
            </div>
            <div className="myInfoNews">
              <p>뉴스레터: 동의 안함</p>
              <p>MMS: 동의 안함</p>
              <p>DM: 동의 안함</p>
            </div>
          </div>
          <div className="order">
            <div className="orderHeader">
              <h3>주문내역</h3>
              <a href="">주문 내역 보기</a>
            </div>
            <div className="orderContent">
              <span>고객님이 주문내역이 없습니다</span>
              <a href="">쇼핑하러 가기</a>
            </div>
          </div>
        </div>
        <div className="secondLine">
          <div className="adress">
            <div className="adressHeader">
              <h3>주소</h3>
              <a href="">전체보기</a>
            </div>
            <div className="adressInfo">
              <p>이화종</p>
              <p>05039</p>
              <p>서울특별시 광진구 자양로 138</p>
              <p>신도브래뉴 304호</p>
              <p>휴대전화 번호 010-5760-1811</p>
            </div>
          </div>
          <div className="delivery">
            <div className="deliveryHeader">
              <h3>기본 배송지</h3>
              <a href="">전체보기</a>
            </div>
            <div className="deliveryInfo">
              <p>이화종</p>
              <p>05039</p>
              <p>서울특별시 광진구 자양로 138</p>
              <p>신도브래뉴 304호</p>
              <p>휴대전화 번호 010-5760-1811</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMypageMain;
