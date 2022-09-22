import axios from "axios";
import React, { useState } from "react";
import AppBar from "../components/Common/AppBar";
import HospitalListItem from "../components/hospital/HospitalListItem";
import SearchInput from "../components/news/SearchInput";

const HospitalPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [hospitalList, setHospitalList] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1",
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        emdongNm: searchInput,
      },
    };

    // #work6 약국 검색 api 를 활용하여 특정 동의 약국 목록을 받아오기
    axios(option).then((response) => {
      console.log(response.data.response.body.items.item);
      setHospitalList(response.data.response.body.items.item);
    });
  };

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
      {hospitalList.map(({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
        return (
          <HospitalListItem
            addr={addr}
            clCd={clCd}
            clCdNm={clCdNm}
            yadmNm={yadmNm}
            ykiho={ykiho}
          ></HospitalListItem>
        );
      })}
    </div>
  );
};

export default HospitalPage;
