import React from "react";

const EventComponent = () => {
  const handleClick = () => {
    console.log("클릭하셨습니다");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  return (
    <div>
      <p>사용자 입력 값 : </p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default EventComponent;
