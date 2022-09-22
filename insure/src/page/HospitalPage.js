import axios from "axios";
import React, { useState } from "react";
import AppBar from "../components/Common/AppBar";
import SearchInput from "../components/news/SearchInput";

const HospitalPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [hospitalList, setHospitalList] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {};

  return (
    <div>
      {/*
            1.POST-MAN 을 통해서 '건강보험심사평가원_병원정보서비스' 테스트.
            2.요청 리스폰스를 확인 후 소스 코드 작성
             - NEWS api 와 동일한 형태의 리스트 작성
             1. 구성요소 만들기 인풋, 버튼
             2. 이벤트 바인딩
             3. aixos 요청 작성하기 
        */}
      <AppBar title={"병원 검색"}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
    </div>
  );
};

export default HospitalPage;
