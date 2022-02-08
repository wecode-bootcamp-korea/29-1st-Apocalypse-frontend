import React, { useState } from 'react';
import './MainSlider.scss';

function MainSlider() {
  const sliderArr = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);

  const goLeft = () => {
    // console.log(x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    // console.log(x);
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
        left
      </button>
      <button className="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
}

export default MainSlider;
