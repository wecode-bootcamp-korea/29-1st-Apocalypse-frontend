import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './LoginMypage.scss';
import LoginMypageMain from './LoginMypageMain';
import Test from './Test';

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
                <Link className="textLink" to="">
                  <span>주문내역 보기</span>
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="sidebarMenu">
                <Link className="textLink" to="">
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
                "를 눌러 이메일 문의 서비스로 보내주시면 응대를
                도와드리겠습니다."
                <br />
                "현재 전화연결은 어려운 점 양해 부탁 드립니다."
                <br />
                "감사합니다."
              </p>
            </div>
          </div>
        </div>

        <div className="mypageContent">
          <Routes>
            <Route path="/" element={<LoginMypageMain />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </div>
      </div>
  );
}

export default LoginMypage;
