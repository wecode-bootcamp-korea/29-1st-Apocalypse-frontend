import React from 'react';
import './Search.scss';

const Search = () => {
  const doHelp = () => {
    alert('저희는 그렇게 친절하지않습니다.');
  };
  return (
    <div className="searchNav">
      <input type="text" placeholder="찾으시는 상품을 입력하여주세요" />
      <div className="help" onClick={doHelp}>
        도움이 필요하세요?
      </div>
    </div>
  );
};

export default Search;
