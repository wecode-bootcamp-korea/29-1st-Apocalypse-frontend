import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import TermsAndConditions_LIST from './coditionData';
import CoditionComponont from './coditionComponont';
import './SignupPage.scss';

const SignupPage = () => {
  const initialValues = {
    userName: '',
    signUpuserInputId: '',
    signUpuserInputPw: '',
  };
  const [userInputText, setUserInputText] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState({});
  const [already, setAlready] = useState(false);
  const [signUpNumber, setSignUpNumber] = useState(0);

  const alreadyMessage = () => {
    setAlready(already => !already);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInputText({ ...userInputText, [name]: value });
    setAlready(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage(validate(userInputText));
    goToSignUp();
  };

  const handleSetNumber = e => {
    setSignUpNumber(e.target.value);
  };

  const toMainNavigate = useNavigate();
  const goToMain = () => {
    toMainNavigate('/');
  };

  const validate = values => {
    const errorMessage = {};
    const regexId = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const regexPw =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}/;
    if (!userInputText.userName) {
      errorMessage.userName = '이름을 입력하세요.';
    }
    if (!userInputText.signUpuserInputId) {
      errorMessage.signUpuserInputId = '이메일을 입력하세요.';
    } else if (!regexId.test(userInputText.signUpuserInputId)) {
      errorMessage.signUpuserInputId = '이메일형식이 아닙니다.';
    }
    if (!userInputText.signUpuserInputPw) {
      errorMessage.signUpuserInputPw = '비밀번호를 입력하세요.';
    } else if (!regexPw.test(userInputText.signUpuserInputPw)) {
      errorMessage.signUpuserInputPw = '비밀번호형식이 아닙니다.';
    }
    return errorMessage;
  };

  const goToSignUp = () => {
    fetch('http://3.34.199.69:8080/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: userInputText.userName,
        email: userInputText.signUpuserInputId,
        password: userInputText.signUpuserInputPw,
        phone_number: signUpNumber,
        address: '선릉역',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'ALREADY EXIST EMAIL') {
          alreadyMessage();
        } else if (result.message === 'CREATED') {
          alert('회원가입을 완료했습니다. 로그인 해주세요.');
        }
        console.log(
          result,
          userInputText.signUpuserInputId,
          userInputText.signUpuserInputPw
        );
      }, []);
  };

  return (
    <div className="newCustomers" onSubmit={handleSubmit}>
      <h2>신규 고객</h2>
      {errorMessage.userName && (
        <p className="error">{errorMessage.userName}</p>
      )}
      {errorMessage.signUpuserInputId && (
        <p className="error">{errorMessage.signUpuserInputId}</p>
      )}
      {errorMessage.signUpuserInputPw && (
        <p className="error">{errorMessage.signUpuserInputPw}</p>
      )}
      <p className={already ? 'error' : 'errorHide'}>
        이미 가입된 아이디 입니다.
      </p>
      <input
        name="userName"
        className="inputText"
        onChange="handleUserName"
        type="text"
        placeholder="* 이름"
        onChange={handleInputChange}
      />
      <input
        name="signUpuserInputId"
        onChange={handleInputChange}
        className="inputText"
        type="email"
        placeholder="* 이메일주소"
      />
      <input
        name="signUpuserInputPw"
        onChange={handleInputChange}
        className="inputText"
        type="password"
        placeholder="* 비밀번호"
      />
      <form className="showPassword">
        <label for="checkbox">
          <input className="inputCheckBox" type="checkbox" />
          <span>비밀번호 표시</span>
        </label>
      </form>
      <div className="conditionalText">
        영문 대문자, 소문자, 숫자, 특수문자를 모두 조합하여 8자 이상으로
        구성해주세요. (예시: Jongmalone123!)
      </div>
      <div className="phoneAuthentication">
        <span className="phoneNumber">* 휴대전화 번호</span>
        <div className="numberInputWrapper">
          <select name="firstNumber" className="firstNumber">
            <option value="selec">선택</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <input
            className="lastNumber"
            onChange={handleSetNumber}
            type="text"
          />
          <input
            className="lastNumber"
            onChange={handleSetNumber}
            type="text"
          />
        </div>
        <button className="authenticationBtn">인증번호 요청</button>
        <input className="authenticationTextInput" type="text" />
        <button className="authenticationNumCheck">인증번호 확인</button>
      </div>
      <ul>
        {TermsAndConditions_LIST.map(termsAndConditions => {
          return (
            <CoditionComponont
              key={termsAndConditions.id}
              name={termsAndConditions.userName}
              content={termsAndConditions.content}
            />
          );
        })}
      </ul>
      <form>
        <div className="receipt">
          <p className="newsLetter">뉴스레터 수신여부*</p>
          <div className="agreeBox">
            <input
              className="radioCheckBox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의"
            />
            <label className="received" type="radio" value="수신">
              수신
            </label>
            <input
              className="radioCheckbox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의안함"
            />
            <label type="radio" value="수신안함">
              수신 안함
            </label>
          </div>
        </div>
      </form>
      <form>
        <div className="receipt">
          <p className="newsLetter">MMS 수신여부*</p>
          <div className="agreeBox">
            <input
              className="radioCheckBox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의"
            />
            <label className="received" type="radio" value="수신">
              수신
            </label>
            <input
              className="radioCheckbox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의안함"
            />
            <label type="radio" value="수신안함">
              수신 안함
            </label>
          </div>
        </div>
      </form>
      <form>
        <div className="receipt">
          <p className="newsLetter">DM 수신여부*</p>
          <div className="agreeBox">
            <input
              className="radioCheckBox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의"
            />
            <label className="received" type="radio" value="수신">
              수신
            </label>
            <input
              className="radioCheckbox"
              type="radio"
              id="contactChoice1"
              name="contact"
              value="동의안함"
            />
            <label type="radio" value="수신안함">
              수신 안함
            </label>
          </div>
        </div>
      </form>
      <div className="note">
        생존에 필요한 각종 신무기, MMS,DM 수신에 동의해주셔야 받아보실 수
        있습니다.
        <br />
        <br />
        <br />
        <br />
        수신에 동의하는 경우, 무기 위탁에도 동의하는 것으로 간주되며, 수신하지
        않을 경우, 종말의 길을 걷게 될 것 입니다.
      </div>
      <div className="subscribers">
        <input type="checkbox" />
        <div className="subscribersText">
          가입자 본인은 만 19세 이상입니다.
          <br />
          (만 19세 이상부터 회원가입이 가능합니다.)
        </div>
      </div>
      <button onClick={handleSubmit} className="joinMemberShip">
        회원가입
      </button>
    </div>
  );
};

export default SignupPage;
