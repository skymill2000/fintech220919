import axios from "axios";
import React from "react";
import AppBar from "../components/Common/AppBar";
import SearchInput from "../components/news/SearchInput";

const PharmacyPage = () => {
  const handleChange = (event) => {};
  const handleClick = () => {
    const option = {
      method: "GET",
      url: "",
      params: {},
    };

    axios(option).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <AppBar title={"약국 검색"}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
    </div>
  );
};

export default PharmacyPage;
