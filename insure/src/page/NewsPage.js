import axios from "axios";
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
    setSearchInput(value);
  };
  const handleClick = () => {
    const apikey = "78bc6ddd8cdb48ceac76f5f9b9dfc4c5";
    const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2022-08-22&sortBy=publishedAt&apiKey=${apikey}&language=ko`;
    console.log(url);
    axios.get(url).then(function (response) {
      console.log(response.data.articles);
      setSearchList(response.data.articles);
    });
  };
  return (
    <div>
      <Appbar title={"뉴스 검색"}></Appbar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList searchList={searchList}></NewsList>
    </div>
  );
};

export default NewsPage;
