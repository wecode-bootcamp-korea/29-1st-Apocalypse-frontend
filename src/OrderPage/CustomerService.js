import React from 'react';
import './CustomerService.scss';

export default function CustomerService() {
  return (
    <div>
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
      </div>
    </div>
  );
}
