import React from 'react';
import { Link } from 'react-router-dom';

import './LoginMypage.scss';

function LoginMypage() {
  return (
    <div className="bodyContainer">
      <div className="sidebar">
        <div className="sidebarNav">
          <ul className="subMenu">
            <li className="sideMypage">
              <a>마이페이지</a>
            </li>
            <li className="logout">
              <a>로그아웃</a>
            </li>
          </ul>
          <ul className="mainMenu">
            <li className="sidebarProfile">
              <Link to="/LoginOrderList">회원정보 입력</Link>
            </li>
            <li className="sidebarAdress">배송주소록</li>
            <li className="sidebarOrder">주문내역 보기</li>
            <li className="sidebarWish">관심상품 리스트</li>
          </ul>
        </div>
        <div className="customService">
          <h1 className="serviceHeader">고객관리지원팀</h1>
          <div className="serviceContent">
            <p>
              "문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음
              링크"
              <br />
              <a>customeCare@customCare</a>
              "를 눌러 이메일 문의 서비스로 보내주시면 응대를 도와드리겠습니다."
              <br />
              "현재 전화연결은 어려운 점 양해 부탁 드립니다."
              <br />
              "감사합니다."
            </p>
          </div>
        </div>
      </div>
      <div className="mypageContent">
        <div className="mypageHeader">
          <h2 className="mypageTitle">내 정보 및 주문 관리</h2>
        </div>
        <div className="welcomeMsg">
          님, 환영합니다. 만약 이화종님이 아니라면, <a>여기를 클릭하십시오.</a>
        </div>
        <div className="myInfoContainer">
          <div className="firstLine">
            <div className="myInfo">
              <div className="myInfoTitle">
                <h3>나의정보</h3>
                <a>정보보기</a>
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
                <a>주문 내역 보기</a>
              </div>
              <div className="orderContent">
                <span>고객님이 주문내역이 없습니다</span>
                <a>쇼핑하러 가기</a>
              </div>
            </div>
          </div>
          <div className="secondLine">
            <div className="adress">
              <div className="adressHeader">
                <h3>주소</h3>
                <a>전체보기</a>
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
                <a>전체보기</a>
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
      </div>
    </div>
  );
}

export default LoginMypage;
