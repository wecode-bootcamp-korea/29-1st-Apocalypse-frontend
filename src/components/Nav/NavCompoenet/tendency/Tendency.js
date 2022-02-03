import React, { useState } from 'react';

import TendencyTest from './TendencyTest';
import './Tendency.scss';

const Tendency = () => {
  const [startTest, setStartTest] = useState(false);

  const doTest = e => {
    setStartTest(startTest => !startTest);
    e.target.parentNode.nextSibling.firstChild.style.display = 'block';
    e.target.parentNode.parentNode.lastChild.style.display = 'block';
  };

  const CheckAnswer = e => {
    const parentNodebox = e.target.parentNode.parentNode.parentNode;
    const nextresultbox = e.target.parentNode.parentNode.parentNode.nextSibling;
    if (e.target.name === parentNodebox.parentNode.lastChild.className) {
      console.log(e.target.value);
      parentNodebox.style.display = 'none';
      parentNodebox.parentNode.nextSibling.style.display = 'block';
    } else {
      console.log(e.target.value);
      parentNodebox.style.display = 'none';
      nextresultbox.style.display = 'block';
    }
  };

  const doReset = e => {
    e.target.style.display = 'none';
    setStartTest(startTest => !startTest);
    const testBox = e.target.parentNode.firstChild.nextSibling.children;
    for (let i = 0; i < testBox.length; i++) {
      testBox[i].style.display = 'none';
    }
    e.target.previousSibling.style.display = 'none';
  };

  return (
    <div className="tendencyDetail">
      <div className={startTest ? 'imformationBoxHide' : 'imformationBox'}>
        <div className="imformation">
          당신의 무기성향을 추천해주는 기능입니다.
        </div>
        <button className="startButton" onClick={doTest}>
          시작하기
        </button>
      </div>
      <div className={startTest ? 'tendencyTest' : 'tendencyTestHide'}>
        {TendencyTest.map(com => {
          return (
            <div
              className={com.className}
              key={com.id}
              style={{ display: 'none' }}
            >
              <div className="questionBox">
                <div>{`${'Q0' + com.id + '. ' + ' '}`}</div>
                <div>{com.Question}</div>
              </div>
              <div>
                {com.Answer.map(com => {
                  return (
                    <div className="buttonBox" key={com.id}>
                      <button
                        onClick={CheckAnswer}
                        value={com.Value}
                        name={com.Name}
                      >
                        {com.Button}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="resultInfoBox" style={{ display: 'none' }}>
        <div className="resultInfo">결과를 확인하시겠습니까?</div>
        <button>결과 확인</button>
      </div>
      <button className="reset" onClick={doReset} style={{ display: 'none' }}>
        X
      </button>
    </div>
  );
};

export default Tendency;
