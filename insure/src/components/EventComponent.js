import React, { useState } from "react";

const EventComponent = () => {
  const [inputValue, setInputValue] = useState("초기값");
  const handleClick = () => {
    console.log("클릭하셨습니다");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div>
      <p>사용자 입력 값 : {inputValue}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default EventComponent;
