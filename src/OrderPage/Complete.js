import React from 'react';
import { useNavigate } from 'react-router';
import CompleteStatusComponent from './CompleteStatusComponent';
import './Complete.scss';

const Complete = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="complete">
      <div className="compContainer">
        <CompleteStatusComponent />
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
