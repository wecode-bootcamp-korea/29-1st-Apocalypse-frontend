import React, { useState } from 'react';
import TendencyTest from './TendencyTest';
import './Tendency.scss';

const Tendency = () => {
  const [startTest, setStartTest] = useState(false);
  const [resetButton, setResetButton] = useState(false);
  const [resultInfoBox, setResultInfoBox] = useState(false);
  const [resultProduct, setResultProduct] = useState(false);

  const doTest = e => {
    setStartTest(startTest => !startTest);
    setResetButton(resetButton => !resetButton);
    e.target.parentNode.nextSibling.firstChild.style.display = 'block';
  };

  const CheckAnswer = e => {
    const parentNodebox = e.target.parentNode.parentNode.parentNode;
    const nextresultbox = e.target.parentNode.parentNode.parentNode.nextSibling;
    if (e.target.name === parentNodebox.parentNode.lastChild.className) {
      parentNodebox.style.display = 'none';
      setResultInfoBox(resultInfoBox => !resultInfoBox);
    } else {
      parentNodebox.style.display = 'none';
      nextresultbox.style.display = 'block';
    }
  };

  const doReset = e => {
    setStartTest(startTest => !startTest);
    setResetButton(resetButton => !resetButton);
    setResultInfoBox(false);
    setResultProduct(false);
    const testBox = e.target.parentNode.firstChild.nextSibling.children;
    for (let i = 0; i < testBox.length; i++) {
      testBox[i].style.display = 'none';
    }
  };

  const OpenResult = () => {
    setResultInfoBox(resultInfoBox => !resultInfoBox);
    setResultProduct(resultProduct => !resultProduct);
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
                <div>
                  Q0{com.id}. {com.Question}
                </div>
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
      <div className={resultInfoBox ? 'resultInfoBox' : 'resultInfoBoxHide'}>
        <div className="resultInfo">결과를 확인하시겠습니까?</div>
        <button onClick={OpenResult}>결과 확인</button>
      </div>
      <button className={resetButton ? 'reset' : 'resetHide'} onClick={doReset}>
        X
      </button>
      <div className={resultProduct ? 'resultProduct' : 'resultProductHide'}>
        <img alt="KoreaName" src="/images/test.jpg" />
        <div className="koreaName">koreaName</div>
        <div className="englishName">englishName</div>
        <div className="price">{`${parseInt(10000)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`}</div>
      </div>
    </div>
  );
};

export default Tendency;
