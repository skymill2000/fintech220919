import axios from "axios";
import React, { useState } from "react";

const Carinfo = () => {
  const [carnum, setcarnum] = useState("");
  const [onwer, setonwer] = useState("");
  const handleClick = () => {
    const option = {
      method: "POST",
      url: "/assist/common/carzen/CarAllInfoInquiry",
      headers: {
        Authorization: "Token 1510567c4cc54a3a8f6deabbccc65604a8b636a5",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {
        REGINUMBER: carnum,
        OWNERNAME: onwer,
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
    });
  };
  const handleChangeCarnum = (e) => {
    const { value } = e.target;
    setcarnum(value);
  };
  const handleChangeOwner = (e) => {
    const { value } = e.target;
    setonwer(value);
  };

  return (
    <div>
      차량 번호 <input onChange={handleChangeCarnum}></input>
      <br></br>
      소유주 : <input onChange={handleChangeOwner}></input>
      <br></br>
      <button onClick={handleClick}>차량 정보 조회하기</button>
    </div>
  );
};

export default Carinfo;
