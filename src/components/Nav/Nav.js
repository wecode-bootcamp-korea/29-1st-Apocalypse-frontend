import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Shopping from './NavCompoenet/Shopping/Shopping';
import Tendency from './NavCompoenet/tendency/Tendency';
import Search from './NavCompoenet/Search/Search';
import MyPage from './NavCompoenet/MyPage/MyPage';
import WishList from './NavCompoenet/WishList/WishList';
import ShoppingBasket from './NavCompoenet/ShoppingBasket/ShoppingBasket';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const [subNav, setSubNav] = useState(false);

  const CloseSubNav = () => {
    setSubNav(false);
  };

  const OpenSuvNav = subName => {
    let obj = {
      shoppingNav: false,
      tendency: false,
      searchNav: false,
      myPageNav: false,
      wishListNav: false,
      shoppingBasketNav: false,
    };
    obj[subName] = true;
    setSubNav(obj);
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <header className="nav">
      <div className="mainNav">
        <div
          className={
            subNav.shoppingNav ||
            subNav.tendency ||
            subNav.searchNav ||
            subNav.myPageNav ||
            subNav.wishListNav ||
            subNav.shoppingBasketNav
              ? 'modal'
              : 'modalHide'
          }
        />
        <div className="leftNavBox">
          <div
            onMouseOver={() => OpenSuvNav('shoppingNav')}
            className={subNav.shoppingNav ? 'shoppingOn' : 'shopping'}
          >
            쇼핑하기
          </div>
          <div
            onMouseOver={() => OpenSuvNav('tendency')}
            className={subNav.tendency ? 'tendencyOn' : 'tendency'}
          >
            성향분석
          </div>
        </div>
        <div className="centerNavBox" onClick={goToMain}>
          <div className="mainTitle">APOCALYPSE</div>
          <div className="subTitle">WECODE</div>
        </div>
        <div className="rightNavBox">
          <i
            className="fas fa-search"
            onMouseOver={() => OpenSuvNav('searchNav')}
          />
          <i
            className="far fa-user"
            onMouseOver={() => OpenSuvNav('myPageNav')}
          />
          <i
            className="far fa-bookmark"
            onMouseOver={() => OpenSuvNav('wishListNav')}
          />
          <i
            className="fas fa-shopping-basket"
            onMouseOver={() => OpenSuvNav('shoppingBasketNav')}
          />
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
            <Tendency />
          </div>
        </div>
      </div>
      <div className="rightSubNav">
        <div
          className={subNav.searchNav ? 'search' : 'searchHide'}
          onMouseLeave={CloseSubNav}
        >
          <Search />
        </div>
        <div
          className={subNav.myPageNav ? 'myPageNavBar' : 'myPageHide'}
          onMouseLeave={CloseSubNav}
        >
          <MyPage />
        </div>
        <div
          className={subNav.wishListNav ? 'wishList' : 'wishListHide'}
          onMouseLeave={CloseSubNav}
        >
          <WishList />
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
