import React from 'react';

function Warring(props) {
  return (
    <div className="warring">
      <span>비밀번호가 맞지 않습니다.</span>
      <span className="noPassWord">{props.data}</span>
    </div>
  );
}

export default Warring;
