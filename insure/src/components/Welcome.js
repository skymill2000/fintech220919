import React from "react";

const Welcome = ({ userName, age }) => {
  return (
    <p>
      {age}세 <b>{userName}</b>님 안녕하세요
    </p>
  );
};

export default Welcome;
