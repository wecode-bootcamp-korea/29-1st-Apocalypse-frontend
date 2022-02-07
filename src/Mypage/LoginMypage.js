import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import LoginMypageMain from './LoginMypageMain';
import LoginOrderList from './LoginOrderList';
import LoginWishList from './LoginWishList';

<<<<<<< HEAD
import LoginMypageMain from './LoginMypageMain';

import './LoginMypage.scss';
=======
import './LoginMypage.scss';
import './LoginOrderList.scss';
>>>>>>> master

function LoginMypage() {
  return (
    <div className="bodyContainer">
      <div className="sidebar">
        <div className="sidebarNav">
          <ul className="subMenu">
            <li className="sideMypage">
              <Link className="textLink" to="">
                마이페이지
              </Link>
            </li>

<<<<<<< HEAD
        <div className="mypageContent">
          <Routes>
            <Route path="/" element={<LoginMypageMain />} />
          </Routes>
=======
            <Link className="textLinkLogin" to="">
              <li className="logout">
                <div>로그아웃</div>
              </li>
            </Link>
          </ul>
          <ul className="mainMenu">
            <li className="sidebarMenu">
              <Link className="textLink" to="test">
                <span>회원정보 입력</span>
                <i className="fas fa-angle-right" />
              </Link>
            </li>
            <li className="sidebarMenu">
              <Link className="textLink" to="">
                <span>배송주소록</span>
                <i className="fas fa-angle-right" />
              </Link>
            </li>
            <li className="sidebarMenu">
              <Link className="textLink" to="loginOrderList">
                <span>주문내역 보기</span>
                <i className="fas fa-angle-right" />
              </Link>
            </li>
            <li className="sidebarMenu">
              <Link className="textLink" to="loginWishList">
                <span>관심상품 리스트</span>
                <i className="fas fa-angle-right" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="customService">
          <h1 className="serviceHeader">고객관리지원팀</h1>
          <div className="serviceContent">
            <p>
              "문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음
              링크"
              <br />
              <a href="#">customeCare@customCare</a>
              "를 눌러 이메일 문의 서비스로 보내주시면 응대를 도와드리겠습니다."
              <br />
              "현재 전화연결은 어려운 점 양해 부탁 드립니다."
              <br />
              "감사합니다."
            </p>
          </div>
>>>>>>> master
        </div>
      </div>

      <div className="mypageContent">
        <Routes>
          <Route path="/" element={<LoginMypageMain />} />
          <Route path="/LoginOrderList" element={<LoginOrderList />} />
          <Route path="/LoginWishList" element={<LoginWishList />} />
        </Routes>
        {/* <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NoMatch />} /> */}
      </div>
    </div>
  );
}

export default LoginMypage;
