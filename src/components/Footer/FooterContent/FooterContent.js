import React from 'react';
import './FooterContent.scss';

function FooterContent() {
  return (
    <div className="footerContent">
      <p className="footerContentTitle">회사 소개</p>
      <a className="footerContentItem" href="/">
        법인 정보
      </a>
      <a className="footerContentItem" href="/">
        법인 판매
      </a>
      <a className="footerContentItem" href="/">
        커리어
      </a>
    </div>
  );
}

export default FooterContent;
