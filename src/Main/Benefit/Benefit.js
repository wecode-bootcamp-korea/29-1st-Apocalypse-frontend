import React from 'react';
import './Benefit.scss';

function Benefit({ title, explain }) {
  return (
    <a className="benefitLink" href="/">
      <div className="benefit">
        <h2 className="benefitTitle">{title}</h2>
        <p className="explain">{explain}</p>
      </div>
    </a>
  );
}

export default Benefit;
