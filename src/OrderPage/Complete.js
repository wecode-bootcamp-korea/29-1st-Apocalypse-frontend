import React from 'react';
import { useNavigate } from 'react-router';
import './Complete.scss';

const Complete = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="complete">
      <div className="compContainer">
        <ol className="completeStatus">
          <li className="statusSpace">
            <div className="statusCheckbox2" />
            <span className="nonState">주문서 작성</span>
          </li>
          <li className="statusSpace">
            <div className="statusCheckbox2" />
            <span className="nonState">주문 검토</span>
          </li>
          <li className="statusSpace">
            <div className="statusCheckbox2" />
            <span className="nonState">결제</span>
          </li>
          <li className="statusSpace">
            <div className="statusCheckbox1" />
            <span>주문 최종 확인</span>
          </li>
        </ol>
        <div className="contentWrap">
          <div className="compMessage">주문이 완료되었습니다!</div>
          <button className="toMain" onClick={goToMain}>
            메인으로
          </button>
          <button className="orderInfoCheck">주문정보 확인</button>
        </div>
      </div>
    </div>
  );
};

export default Complete;
