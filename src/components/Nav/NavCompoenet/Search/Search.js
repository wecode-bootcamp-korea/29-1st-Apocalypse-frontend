import React, { useState } from 'react';
import MiddleSearch from './Searching/MiddleSearch';
import './Search.scss';

const Search = () => {
  const [searching, setSearching] = useState([]);
  const [searchingInput, setSearchingInput] = useState('');

  // useEffect(() => {
  //   fetch('http://13.125.234.40:8080/products')
  //     .then(res => res.json())
  //     .then(result => setSearching(result.Product));
  // }, []);

  const searchProduct = e => {
    setSearchingInput(e.target.value);
  };

  const goSearch = e => {
    if (e.key === 'Enter') {
      fetch(`http://10.58.7.168:8000/products/search?keyword=${searchingInput}`)
        .then(res => res.json())
        .then(result => {
          setSearching(result.Product);
        });
    }
  };

  // const searchResult = searching.filter(product =>
  //   product.korean_name.includes(searchingInput)
  // );

  const doHelp = () => {
    alert('저희는 그렇게 친절하지않습니다.');
  };

  return (
    <div className="searchNav">
      <input
        type="text"
        placeholder="찾으시는 상품을 입력하여주세요"
        onChange={searchProduct}
        onKeyUp={goSearch}
      />
      {searching && (
        <div className="searchingBox">
          <MiddleSearch searching={searching} />
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
