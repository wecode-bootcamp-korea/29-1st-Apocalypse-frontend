import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsAndConditions_LIST from './coditionData';
import CoditionComponont from './coditionComponont';
import './Mypage.scss';
import Warring from './Warring';

function Mypage() {
  const [userInputText, setUserInputText] = useState({
    userName: '',
    userInputId: '',
    userInputPw: '',
    signUpuserInputId: '',
    signUpuserInputPw: '',
  });

  const [signUpNumber, setSignUpNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const toLoginNavigate = useNavigate();
  const goToLoginMyPage = () => {
    toLoginNavigate('/loginMyPage');
  };

  const toMainNavigate = useNavigate();
  const goToMain = () => {
    toMainNavigate('/');
  };
  const enter = e => {
    if (e.key === 'Enter') {
      goToSignIn();
    }
  };

  const goToSignIn = () => {
    fetch('http://10.58.5.61:8000/users/signin', {
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
          setErrorMessage('비밀번호가 올바르지 않습니다.');
        } else if (result.message === 'INVALID EMAIL') {
          alert('이메일이 올바르지 않습니다.');
        } else if (result.message === 'DOES NOT EXIST USER') {
          alert('이메일 주소를 입력하세요.');
          alert('비밀번호를 입력하세요.');
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

  const goToSignUp = () => {
    fetch('http://10.58.5.61:8000/users/signup', {
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
        if (result.message === 'INVALID PASSWORD') {
          alert('비밀번호 형식이 올바르지 않습니다.');
        } else if (result.message === 'INVALID EMAIL') {
          alert('이메일이 형식이 올바르지 않습니다.');
        } else if (result.message === 'ALREADY EXIST EMAIL') {
          alert('존재하는 아아디 입니다.');
        } else if (result.message === 'DOES NOT EXIST USER') {
          alert('존재하지 않는 유저입니다.');
        } else if (result.message === 'CREATED') {
          sessionStorage.setItem('token', result.JWT);
          alert('환영합니다.');
          goToMain();
        }
        console.log(
          result,
          userInputText.signUpuserInputId,
          userInputText.signUpuserInputPw
        );
      });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInputText({ ...userInputText, [name]: value });
  };
  const handleSetNumber = e => {
    setSignUpNumber(e.target.value);
  };

  return (
    <div className="myPage">
      <div className="wrapper">
        <div className="head">마이페이지</div>
        <div className="customerBox">
          <div className="newCustomers">
            <h2>신규 고객</h2>
            <input
              name="userName"
              className="inputText"
              onChange="handleUserName"
              type="text"
              placeholder="* 이름"
            />
            <input
              name="signUpuserInputId"
              onChange={handleInputChange}
              className="inputText"
              type="text"
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
              수신에 동의하는 경우, 무기 위탁에도 동의하는 것으로 간주되며,
              수신하지 않을 경우, 종말의 길을 걷게 될 것 입니다.
            </div>
            <div className="subscribers">
              <input type="checkbox" />
              <div className="subscribersText">
                가입자 본인은 만 19세 이상입니다.
                <br />
                (만 19세 이상부터 회원가입이 가능합니다.)
              </div>
            </div>
            <button onClick={goToSignUp} className="joinMemberShip">
              회원가입
            </button>
          </div>

          <div className="existingCustomers">
            <h2>기존 고객</h2>

            <input
              name=" userInputId"
              onChange={handleInputChange}
              className="inputText"
              type="text"
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
              비밀번호를 잊어버리셨나요? 회원가입 시 등록해주신 이메일 주소를
              입력해 주시고,
              <a href="#">여기를 클릭하세요.</a>
            </div>
            <button className="loginBtn" onClick={goToSignIn}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
