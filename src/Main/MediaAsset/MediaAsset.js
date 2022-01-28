import React from 'react';
import MoreText from '../MoreText/MoreText';
import './MediaAsset.scss';

function MediaAsset() {
  return (
    <div className="MediaAsset">
      <img
        className="productImg"
        alt="img"
        src="https://www.jomalone.co.kr/media/export/cms/homepage/220117/BBB_Scent_Pairing_Palette_1080x1920_72dpi_Insta_Story_MOB_626x660.jpg"
      />
      <div className="text">
        <h1 className="title">NEW 솔리드 센트</h1>
        <MoreText />
      </div>
    </div>
  );
}

export default MediaAsset;
