import React from "react";
import axios from "axios";

const AxiosComponent = () => {
  const handleClick = () => {
    const url =
      "https://newsapi.org/v2/everything?q=apple&from=2022-08-21&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko";
    axios.get(url).then(function (response) {
      // handle success
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosComponent;
