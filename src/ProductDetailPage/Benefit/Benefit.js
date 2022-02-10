import React from 'react';
import './Benefit.scss';

function Benefit({ title, explain }) {
  return (
    <a className="benefit" href="/">
      <h2 className="benefitTitle">{title}</h2>
      <p className="explain">{explain}</p>
    </a>
  );
}

export default Benefit;
