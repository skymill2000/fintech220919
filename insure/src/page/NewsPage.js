import React, { useState } from "react";
import Appbar from "../components/Common/AppBar";
import NewsList from "../components/news/NewsList";
import SearchInput from "../components/news/SearchInput";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  //1. searchInput 데이터를 newsSearch 컴포넌트로 부터 받아 오기
  const [searchList, setSearchList] = useState([]);
  //2. axios를 통해서 데이터를 요청하여 내역 searchList 채우기
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };
  const handleClick = () => {};
  return (
    <div>
      <Appbar title={"뉴스 검색"}></Appbar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
