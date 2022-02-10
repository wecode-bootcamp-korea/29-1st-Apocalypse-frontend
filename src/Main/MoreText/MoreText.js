import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoreText.scss';

function MoreText() {
  const navigate = useNavigate();
  const goToMore = e => {
    if (e.target.parentNode.previousSibling.className === 'titleId1') {
      navigate('/ProductDetailPage/5');
    } else {
      const num = Math.floor(Math.random() * 26);
      navigate(`/ProductDetailPage/${num}`);
    }
  };

  return (
    <div className="moreText" onClick={goToMore}>
      <span className="more">더 알아보기</span>
    </div>
  );
}

export default MoreText;
