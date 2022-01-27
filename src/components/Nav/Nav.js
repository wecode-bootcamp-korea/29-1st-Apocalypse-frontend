import React, { useState } from 'react';

import Shopping from './NavCompoenet/Shopping/Shopping';
import Search from './NavCompoenet/Search/Search';
import MyPage from './NavCompoenet/MyPage/MyPage';
import WishList from './NavCompoenet/WishList/WishList';
import ShoppingBasket from './NavCompoenet/ShoppingBasket/ShoppingBasket';

import './Nav.scss';

function Nav() {
  const [subNav, setSubNav] = useState({
    shoppingNav: false,
    tendency: false,
    searchNav: false,
    myPageNav: false,
    wishListNav: false,
    shoppingBasketNav: false,
  });

  const CloseSubNav = () => {
    setSubNav(false);
  };

  const OpenShopping = () => {
    setSubNav({
      shoppingNav: true,
      tendency: false,
      searchNav: false,
      myPageNav: false,
      wishListNav: false,
      shoppingBasketNav: false,
    });
  };

  const OpenTendency = () => {
    setSubNav({
      shoppingNav: false,
      tendency: true,
      searchNav: false,
      myPageNav: false,
      wishListNav: false,
      shoppingBasketNav: false,
    });
  };

  const OpenSearch = () => {
    setSubNav({
      shoppingNav: false,
      tendency: false,
      searchNav: true,
      myPageNav: false,
      wishListNav: false,
      shoppingBasketNav: false,
    });
  };

  const OpenMypage = () => {
    setSubNav({
      shoppingNav: false,
      tendency: false,
      searchNav: false,
      myPageNav: true,
      wishListNav: false,
      shoppingBasketNav: false,
    });
  };

  const OpenWishList = () => {
    setSubNav({
      shoppingNav: false,
      tendency: false,
      searchNav: false,
      myPageNav: false,
      wishListNav: true,
      shoppingBasketNav: false,
    });
  };

  const OpenShoppingBasket = () => {
    setSubNav({
      shoppingNav: false,
      tendency: false,
      searchNav: false,
      myPageNav: false,
      wishListNav: false,
      shoppingBasketNav: true,
    });
  };

  return (
    <header className="nav">
      <div className="mainNav">
        <div className="leftNavBox">
          <div
            onMouseOver={OpenShopping}
            className={subNav.shoppingNav ? 'shoppingOn' : 'shopping'}
          >
            쇼핑하기
          </div>
          <div
            onMouseOver={OpenTendency}
            className={subNav.tendency ? 'tendencyOn' : 'tendency'}
          >
            성향분석
          </div>
        </div>
        <div className="centerNavBox">
          <div className="mainTitle">APOCALYPSE</div>
          <div className="subTitle">WECODE</div>
        </div>
        <div className="rightNavBox">
          <i class="fas fa-search" onMouseOver={OpenSearch} />
          <i class="far fa-user" onMouseOver={OpenMypage} />
          <i className="far fa-bookmark" onMouseOver={OpenWishList} />
          <i class="fas fa-shopping-basket" onMouseOver={OpenShoppingBasket} />
        </div>
      </div>
      <div className="leftSubNav">
        <div className="subNav">
          <div
            className={subNav.shoppingNav ? 'shopping' : 'shoppingHide'}
            onMouseLeave={CloseSubNav}
          >
            <Shopping />
          </div>
          <div
            className={subNav.tendency ? 'tendency' : 'tendencyHide'}
            onMouseLeave={CloseSubNav}
          >
            야 이걸 알고리즘을 어떻게 짜서 구현해야되냐
          </div>
        </div>
      </div>
      {/* 모달 뒷 배경색 변경 시도중 */}
      {/* <div
        className={
          subNav.myPageNav || subNav.wishListNav || subNav.shoppingBasketNav
            ? 'backgrounddShow'
            : 'background'
        }
      /> */}
      <div className="rightSubNav">
        <div
          className={subNav.searchNav ? 'search' : 'searchHide'}
          onMouseLeave={CloseSubNav}
        >
          <Search subNav={subNav} />
        </div>
        <div
          className={subNav.myPageNav ? 'myPage' : 'myPageHide'}
          onMouseLeave={CloseSubNav}
        >
          <MyPage subNav={subNav} />
        </div>
        <div
          className={subNav.wishListNav ? 'wishList' : 'wishListHide'}
          onMouseLeave={CloseSubNav}
        >
          <WishList subNav={subNav} />
        </div>
        <div
          className={
            subNav.shoppingBasketNav ? 'shoppingBasket' : 'shoppingBasketHide'
          }
          onMouseLeave={CloseSubNav}
        >
          <ShoppingBasket subNav={subNav} />
        </div>
      </div>
    </header>
  );
}

export default Nav;
