import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MyPage.scss';

const MyPage = () => {
  const navigate = useNavigate('');

  const [inputValues, setInputValues] = useState({
    id: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const goToMain = e => {
    fetch('http://10.58.5.61:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: '김기만',
        email: inputValues.id,
        password: inputValues.password,
        phone_number: '010-8840-6505',
        address: 'adfasdff',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.JWT) {
          sessionStorage.setItem('JWT', result.JWT);
          alert('로그인을 완료하였습니다.');
          navigate('/');
        } else {
          alert('아이디 및 비밀번호를 확인해주세요');
        }
      });
    // if (inputValues.id.indexOf('@') > -1 && inputValues.password.length >= 5) {
    //   navigate('/MyPage');
    // } else {
    //   alert('아이디 및 비밀번호를 확인해주세요');
    // }
  };

  const doEnter = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };

  return (
    <div className="myPageNav">
      {!sessionStorage.getItem('JWT') ? (
        <div className="myPageLogin">
          <div className="title">로그인</div>
          <div className="loginBox">
            <input
              name="id"
              type="email"
              placeholder="이메일 주소"
              onInput={handleInput}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onInput={handleInput}
              onKeyUp={doEnter}
            />
          </div>
          <div className="findPassWord">비밀번호 찾기</div>
          <button onClick={goToMain}>로그인</button>
          <div className="under">
            <div className="text">아직 회원이 아니신가요?</div>
            <div className="join">
              <Link to="/MyPage">회원가입</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="myPageLoginComplete">
          <div>
            <Link to="/MyPage">마이페이지 보기</Link>
          </div>
          <div>
            <Link to="/MyPage">관심상품 보기</Link>
          </div>
          <div>
            <Link to="/MyPage">장바구니 보기</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
