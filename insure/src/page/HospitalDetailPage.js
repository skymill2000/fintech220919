import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "../components/Common/AppBar";
import qs from "query-string";

const HospitalDetailPage = () => {
  const { search } = useLocation();
  const parsedData = qs.parse(search);
  console.log(parsedData.ykiho);

  return (
    <div>
      <AppBar title={"병원 상세 정보"}></AppBar>
    </div>
  );
};

export default HospitalDetailPage;
