import React, { useState } from 'react';
import './Bookmark.scss';

function Bookmark() {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className="Bookmark">
      <div className="bookmarkIcon" onClick={handleBookmark}>
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
