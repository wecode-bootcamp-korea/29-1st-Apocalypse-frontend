import React from 'react';
import './Benefit.scss';

function Benefit() {
  return (
    <a className="benefitLink" href="/">
      <div className="benefit">
        <h2 className="benefitTitle">선물 포장</h2>
        <p className="explain">시그니처 박스에 정성스럽게 포장해 드립니다.</p>
      </div>
    </a>
  );
}

export default Benefit;
