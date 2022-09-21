import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  color: white;
  background-color: #000000;
  border-bottom: 2px solid #000000;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  text-shadow: 3px 3px 3px #1c6ea4;
`;

const AppBar = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default AppBar;
