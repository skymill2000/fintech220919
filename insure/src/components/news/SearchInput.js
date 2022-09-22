import React from "react";

const SearchInput = ({ handleClick, handleChange }) => {
  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>검색하기</button>
    </div>
  );
};

export default SearchInput;
