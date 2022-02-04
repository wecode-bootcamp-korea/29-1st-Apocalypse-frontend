import React, { useState } from 'react';
// import UseLocalStorage from '../UseLocalStorage';
import './Bookmark.scss';

function Bookmark({ productList }) {
  const [bookmark, setBookmark] = useState(false);

  const test = () => {
    setBookmark(bookmark => !bookmark);
    sessionStorage.setItem(
      `korean_name${productList.id}`,
      productList.korean_name
    );
  };

  return (
    <div className="bookmark">
      <div className="bookmarkIcon" onClick={test}>
        {bookmark ? (
          <i class="fas fa-bookmark" />
        ) : (
          <i class="far fa-bookmark" />
        )}
      </div>
    </div>
  );
}

export default Bookmark;
