/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import MainSliderComp from './MainSliderComp/MainSliderComp';
import i1 from './pics/main_1.jpeg';
import i2 from './pics/main_2.jpeg';
import i3 from './pics/main_3.jpeg';
import './MainSlider.scss';

function MainSlider() {
  let sliderArr = [
    <MainSliderComp
      src={i1}
      title="대한민국 국군의 제식 소총의 재탄생"
      key={1}
    />,
    <MainSliderComp src={i2} title="마음의 고향 같은 소총" key={2} />,
    <MainSliderComp src={i3} title="숨고싶을 때는 이것을" key={3} />,
  ];

  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const goLeft = e => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    setCurrent(current === 0 ? sliderArr.length - 1 : current - 1);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    setCurrent(current === sliderArr.length - 1 ? 0 : current + 1);
  };

  const auto = () => {
    slideInterval = setInterval(goRight, intervalTime);
  };

  useEffect(() => {
    setX(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [x]);

  return (
    <div className="mainSlider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            // className="slide"
            className={index === x ? 'slide active' : 'slide'}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

export default MainSlider;
