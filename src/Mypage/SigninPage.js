import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SigninPage.scss';

const SigninPage = () => {
  const initialValues = { userInputId: '', userInputPw: '' };
  const [isSubmit, setIsSubmit] = useState(false);
  const [userInputText, setUserInputText] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage(validate(userInputText));
    goToSignIn();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInputText({ ...userInputText, [name]: value });
  };

  const submitForm = () => {
    setIsSubmit(true);
  };

  const toLoginNavigate = useNavigate();
  const goToLoginMyPage = () => {
    toLoginNavigate('/loginMyPage');
  };

  const enter = e => {
    if (e.key === 'Enter') {
      goToSignIn();
    }
  };

  const validate = userInputText => {
    const errorMessage = {};
    const regexId = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const regexPw =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}/;

    if (!userInputText.userInputId) {
      errorMessage.userInputId = '이메일을 입력하세요.';
    } else if (!regexId.test(userInputText.userInputId)) {
      errorMessage.userInputId = '이메일형식이 아닙니다.';
    }
    if (!userInputText.userInputPw) {
      errorMessage.userInputPw = '비밀번호를 입력하세요.';
    } else if (!regexPw.test(userInputText.userInputPw)) {
      errorMessage.userInputPw = '비밀번호 형식이 아닙니다.';
    }
    return errorMessage;
  };

  const goToSignIn = () => {
    fetch('http://192.168.0.6:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: 'park',
        email: userInputText.userInputId,
        password: userInputText.userInputPw,
        phone_number: '01023233232',
        address: '선릉역',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID PASSWORD1') {
          alert('비밀번호가 형식이 올바르지 않습니다.');
        } else if (result.message === 'INVALID EMAIL') {
          alert('이메일이  형식이 올바르지 않습니다.');
        } else if (result.message === 'DOES NOT EXIST USER') {
          alert('빈칸을 모두 입력하세요.');
        } else if (result.message === 'SUCCESS') {
          sessionStorage.setItem('token', result.JWT);
          goToLoginMyPage();
        }
        console.log(
          result,
          userInputText.userInputId,
          userInputText.userInputPw
        );
      });
  };

  return (
    <div className="existingCustomers" onSubmit={handleSubmit}>
      <h2>기존 고객</h2>
      {errorMessage.userInputId && (
        <p className="error">{errorMessage.userInputId}</p>
      )}
      {errorMessage.userInputPw && (
        <p className="error">{errorMessage.userInputPw}</p>
      )}
      <input
        name="userInputId"
        onChange={handleInputChange}
        className="inputText"
        type="email"
        placeholder="* 이메일주소"
      />
      <input
        name="userInputPw"
        onChange={handleInputChange}
        onKeyUp={enter}
        className="inputText"
        type="password"
        placeholder="* 비밀번호"
      />
      <div className="lostPassword">
        비밀번호를 잊어버리셨나요? 회원가입 시 등록해주신 이메일 주소를 입력해
        주시고,
        <a href="#">여기를 클릭하세요.</a>
      </div>
      {!isSubmit ? submitForm() : goToSignIn()}
      <button className="loginBtn" onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
};

export default SigninPage;
