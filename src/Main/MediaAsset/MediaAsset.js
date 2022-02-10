import React from 'react';
import MoreText from '../MoreText/MoreText';
import './MediaAsset.scss';

function MediaAsset() {
  return (
    <div className="mediaAsset">
      <img
        className="productImg"
        alt="img"
        src="https://images.unsplash.com/photo-1501824466809-99dbdfbc08d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80"
      />
      <div className="text">
        <h1 className="title">현대식 기관단총</h1>
        <MoreText />
      </div>
    </div>
  );
}

export default MediaAsset;
