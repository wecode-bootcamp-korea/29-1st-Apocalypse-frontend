import React from 'react';
import Searching from './Searching';

const MiddleSearch = ({ searchResult }) => {
  return (
    <div className="middleSearch">
      {searchResult.length > 0 &&
        searchResult.map(com => {
          return <Searching product={com} key={com.id} />;
        })}
    </div>
  );
};

export default MiddleSearch;
