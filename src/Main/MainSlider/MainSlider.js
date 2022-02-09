import React, { useState } from 'react';
import MainSliderComp from './MainSliderComp/MainSliderComp';
import i1 from './pics/main_1.jpeg';
import i2 from './pics/main_2.jpeg';
import i3 from './pics/main_3.jpeg';
import './MainSlider.scss';

function MainSlider() {
  const sliderArr = [
    <MainSliderComp src={i1} title="뱅뱅뱅" />,
    <MainSliderComp src={i2} title="빵야빵야" />,
    <MainSliderComp src={i3} title="탕탕탕" />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="mainSlider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
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
