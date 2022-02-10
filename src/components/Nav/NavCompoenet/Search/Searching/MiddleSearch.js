import React from 'react';
import Searching from './Searching';

const MiddleSearch = ({ searching }) => {
  return (
    <div className="middleSearch">
      {searching.length > 0 &&
        searching.map(com => {
          return <Searching product={com} key={com.id} />;
        })}
    </div>
  );
};

export default MiddleSearch;
