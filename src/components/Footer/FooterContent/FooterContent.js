import React from 'react';
import './FooterContent.scss';

function FooterContent() {
  return (
    <div className="FooterContent">
      <p className="FooterContentTitle">회사 소개</p>
      <a className="FooterContentItem" href="/">
        법인 정보
      </a>
      <a className="FooterContentItem" href="/">
        법인 판매
      </a>
      <a className="FooterContentItem" href="/">
        커리어
      </a>
    </div>
  );
}

export default FooterContent;
