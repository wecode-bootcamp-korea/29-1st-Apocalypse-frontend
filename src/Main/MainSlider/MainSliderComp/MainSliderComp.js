import React from 'react';
import MoreText from '../../MoreText/MoreText';
import './MainSliderComp.scss';

function MainSliderComp({ src, title }) {
  const mainImgStyles = {
    width: 100 + '%',
    // height: 808 + 'px',
  };
  return (
    <div className="mainSliderComp">
      <img
        className="mainImg"
        src={src}
        alt="slide-img"
        style={mainImgStyles}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <MoreText />
      </div>
    </div>
  );
}

export default MainSliderComp;
