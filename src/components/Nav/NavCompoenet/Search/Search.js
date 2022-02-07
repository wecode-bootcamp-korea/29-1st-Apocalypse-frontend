import React, { useState, useEffect } from 'react';
import MiddleSearch from './Searching/MiddleSearch';
import './Search.scss';

const Search = () => {
  const [searching, setSearching] = useState([]);
  const [searchingInput, setSearchingInput] = useState('');

  useEffect(() => {
    fetch('/data/commentDataList.json')
      .then(res => res.json())
      .then(result => setSearching(result.Product));
  }, []);

  const searchProduct = e => {
    setSearchingInput(e.target.value);
  };

  const searchResult = searching.filter(product =>
    product.korean_name.includes(searchingInput)
  );

  const doHelp = () => {
    alert('저희는 그렇게 친절하지않습니다.');
  };

  return (
    <div className="searchNav">
      <input
        type="text"
        placeholder="찾으시는 상품을 입력하여주세요"
        onChange={searchProduct}
      />
      {searchingInput !== '' && (
        <div className="searchingBox">
          <MiddleSearch searchResult={searchResult} />
        </div>
      )}
      <div className="helpBox">
        <div className="help" onClick={doHelp}>
          도움이 필요하세요?
        </div>
      </div>
    </div>
  );
};

export default Search;
