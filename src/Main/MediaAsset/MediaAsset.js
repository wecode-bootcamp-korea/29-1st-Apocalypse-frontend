import React from 'react';
import MoreText from '../MoreText/MoreText';
import './MediaAsset.scss';

function MediaAsset({ title, img }) {
  return (
    <div className="mediaAsset">
      <img className="productImg" alt="img" src={img} />
      <div className="text">
        <h1 className="title">{title}</h1>
        <MoreText />
      </div>
    </div>
  );
}

export default MediaAsset;
