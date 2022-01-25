import React from 'react';

import './Nav.scss';

function Nav() {
  return (
    <header className="nav">
      <div className="mainNav">
        <div className="leftNavBox">
          <div>쇼핑하기</div>
          <div>성향분석</div>
        </div>
        <div className="centerNavBox">
          <div className="mainTitle">APOCALYPSE</div>
          <div className="subTitle">WECODE</div>
        </div>
        <div className="rightNavBox">
          <div className="Search Bar">
            <i class="fas fa-search" />
          </div>
          <div className="myPageBar">
            <i class="far fa-user" />
          </div>
          <div className="wishListBar">
            <i className="far fa-bookmark" />
          </div>
          <div className="">
            <i class="fas fa-shopping-basket" />
          </div>
        </div>
      </div>
      <div className="subNav">
        <div className="leftSubNav">dkdkdkdkdkdk</div>
      </div>
    </header>
  );
}

export default Nav;
