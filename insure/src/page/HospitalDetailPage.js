import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "../components/Common/AppBar";
import qs from "query-string";

const HospitalDetailPage = () => {
  const { search } = useLocation();
  const parsedData = qs.parse(search);
  console.log(parsedData.ykiho);
  {
    /*
            1.POST-MAN 을 통해서 '병원진료정보 조회서비스' 테스트.
            2.요청 리스폰스를 확인 후 소스 코드 작성
             - NEWS api 와 동일한 형태의 리스트 작성
             1. 구성요소 만들기 인풋, 버튼
             2. 이벤트 바인딩
             3. aixos 요청 작성하기 
        */
  }
  return (
    <div>
      <AppBar title={"병원 상세 정보"}></AppBar>
    </div>
  );
};

export default HospitalDetailPage;
