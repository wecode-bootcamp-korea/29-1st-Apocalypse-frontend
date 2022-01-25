import React from 'react';

import './LoginMypage.scss';
import '../styles/variables.scss';

function LoginMypage() {
  return (
    <div className="content">
      <div className="mypage header">
        <h2 className="myageTitle">내 정보 및 주문 관리</h2>
      </div>
      <div className="welcomeMsg">
        님, 환영합니다. 만약 이화종님이 아니라면, <a>여기를 클릭하십시오.</a>
      </div>
      <div>
        <div className="myInfoContainer">
          <div className="myInfo title">
            <h3>나의정보</h3>
            <a>정보보기</a>
          </div>
          <div className="">
            <span>이름 이화종</span>
          </div>
          <div className="">
            <span>이메일 주소:</span>
            <p>hjlee1811@gamil.com</p>
          </div>
          <div>뉴스레터: 동의 안함 MMS: 동의 안함 DM: 동의 안함</div>
        </div>
        <div className="order">
          <div className="orderHeader">
            <h3>주문내역</h3>
            <a>주문 내역 보기</a>
          </div>
          <div className="orderContent">
            <span>고객님이 주문내역이 없습니다</span>
            <a>쇼핑하러 가기</a>
          </div>
        </div>
        <div className="adress">
          <div className="adressHeader">
            <h3>주소</h3>
            <a>전체보기</a>
          </div>
          <div>
            <span>이화종</span>
            <span>05039</span>
            <span>서울특별시 광진구 자양로 138</span>
            <span>신도브래뉴 304호</span>
            <span>휴대전화 번호 010-5760-1811</span>
          </div>
        </div>
        <div class="delivery">
          <div className="deliveryHeader">
            <h3>기본 배송지</h3>
            <a>전체보기</a>
          </div>
          <div>
            <span>이화종</span>
            <span>05039</span>
            <span>서울특별시 광진구 자양로 138</span>
            <span>신도브래뉴 304호</span>
            <span>휴대전화 번호 010-5760-1811</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMypage;
