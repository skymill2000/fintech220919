import axios from "axios";
import React, { useState } from "react";
import AppBar from "../components/Common/AppBar";
import SearchInput from "../components/news/SearchInput";

const PharmacyPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pharmacyList, setPharmacyList] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList",
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        emdongNm: searchInput,
      },
    };

    // #work6 약국 검색 api 를 활용하여 특정 동의 약국 목록을 받아오기
    axios(option).then((response) => {
      console.log(response.data.response.body.items.item);
      setPharmacyList(response.data.response.body.items.item);
    });
  };

  return (
    <div>
      <AppBar title={"약국 검색"}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      {pharmacyList.map((pharmacy) => {
        return <p>{pharmacy.yadmNm}</p>;
      })}
    </div>
  );
};

export default PharmacyPage;
