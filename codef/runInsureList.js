/**
 *  코드에프 예제 - 상품요청 예시
 *  - https://developer.codef.io/products
 *
 * @Company : ©CODEF corp.
 * @Author  : tech@codef.io
 * @Date    : Aug 1, 2020 3:36:11 PM
 * @Version : 1.0.0
 */
const { EasyCodef, EasyCodefConstant } = require("easycodef-node");
const readline = require("readline");
//코드에프 가입을 통해 발급 받은 클라이언트 정보 - 데모
const DEMO_CLIENT_ID = "0c40bb24-530e-4d03-a47d-e9619b4e59cf";
const DEMO_CLIENT_SECRET = "9471cd0e-4e3c-48f3-9cad-a1cb4096b55c";

// 코드에프 가입을 통해 발급 받은 클라이언트 정보- 정식
const CLIENT_ID = "ef27cfaa-10c1-4470-adac-60ba476273f9";
const CLIENT_SECRET = "83160c33-9045-4915-86d8-809473cdf5c3";

//	코드에프 가입을 통해 발급 받은 RSA 공개키 정보
const PUBLIC_KEY =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx5I0qXdY6TntcE3am2C1czumzRXbx5QlYT9b0Q5SGcqc9ErpVXRWnVUdVUiwHBcD2+aIhN00PYrSgwVSVAz5LrhxZxfiwe7Uj7C5j3Cn18Tk3thliHoB8iq2+04YE5NaQj/Tkz1ZVbuogo+8Pbkl/VjZY7L0W9wu57vDse2Xp2juT/WU5EjBtt6Szbpbs561ObsfpeUzHWC1WKzcuwRX0xt6bdgm5EsK/Prt4ZY/y+JFhCIxeoe8wN2iHYELp8SEUeTCbEwPXGQGkrihjg546bmZrdl9cu19R3+NaHNC/OPBvrrkB5HIEcjOqxOoMFMIyn6lz3bZMw7lUDu91q1UmwIDAQAB";

/*
 * #1.쉬운 코드에프 객체 생성
 */
const codef = new EasyCodef();

/*
 * #2.RSA암호화를 위한 퍼블릭키 설정
 * - 데모/정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 암호화가 필요한 필드에 사용 - encryptValue(String plainText);
 */
codef.setPublicKey(PUBLIC_KEY);

/*
 * #3.데모 클라이언트 정보 설정
 * - 데모 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 데모 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);

/*
 * #4.정식 클라이언트 정보 설정
 * - 정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 정식 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfo(CLIENT_ID, CLIENT_SECRET);

/*
 * #5.요청 파라미터 설정
 */

async function run() {
  const productUrl = "/v1/kr/insurance/0200/cont/find"; //  개인 보유계좌 조회 URL
  /*
   * #5.요청 파라미터 설정
   * - 수신거부 등록/해제 신청 파라미터를 설정(https://developer.codef.io/products/public/each/ft/set-register)
   */
  let param = {
    organization: "0200",
    userName: "유관우",
    identity: "",
    phoneNo: "01091615808",
    inquiryType: "0",
    telecom: "1",
    timeout: "160",
    certFile: "",
    keyFile: "",
    certPassword: "",
  };

  const serviceType = EasyCodefConstant.SERVICE_TYPE_DEMO;

  /*	#6.요청
   *  [서비스 타입 설정]
   *      - 샌드박스 : EasyCodefConstant.SERVICE_TYPE_SANDBOX
   *      - 데모 : EasyCodefConstant.SERVICE_TYPE_DEMO
   *      - 운영 : EasyCodefConstant.SERVICE_TYPE_API
   */
  let res = await codef.requestProduct(productUrl, serviceType, param);
  // #7.응답 결과
  console.log(res);

  // #8. 추가인증 요청
  const resObj = JSON.parse(res);
  if (resObj.result.code === "CF-03002") {
    await requestTwoWay(resObj, productUrl, serviceType, param);
  } else {
    process.exit();
  }
}

async function requestTwoWay(response, productUrl, serviceType, param) {
  // 응답코드 - CF-03002 추가인증 요청 응답
  const twoWayParam = await createTwoWayParam(response, param);
  const res = await codef.requestCertification(
    productUrl,
    serviceType,
    twoWayParam
  );
  console.log(res);

  const resObj = JSON.parse(res);
  if (resObj.result.code === "CF-03002") {
    await requestTwoWay(resObj, productUrl, serviceType, param);
  } else {
    process.exit();
  }
}

/*
  * 추가 인증 정보 입력
  [추가인증 응답부 예시]
          {
           "result" : {
             "code" : "CF-03002",
             "extraMessage" : "API 요청 처리가 정상 진행 중입니다. 추가 정보를 입력하세요.",
             "message" : "성공",
             "transactionId" : "ea07194e64764389a57b23019a4d56f4"
           },
           "data" : {
             "continue2Way" : true,
             "method" : "secureNo",
             "jobIndex" : 0,
             "threadIndex" : 0,
             "jti" : "5f2a22a5ec829abcd93",
             "twoWayTimestamp" : 1596596935178,
             "extraInfo" : {
               "reqSecureNoRefresh" : "0",
               "reqSecureNo" : "data:img/jpeg;base64,/9j............"
             }
           },
           "twoWayInfo" : {
             "jobIndex" : 0,
             "threadIndex" : 0,
             "twoWayTimeout" : 160,
             "jti" : "5f2a22a5ec829abcd933694e",
             "twoWayTimestamp" : 1596596905358
           },
           "is2Way" : true
         }
  * @param response
  */
function createTwoWayParam(response, param) {
  const resObj = response.data;
  const readLine_1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  switch (resObj.method) {
    case "secureNo":
      //+  보안문자 입력
      console.log("보안문자 입력 :: ");
      readLine_1.setPrompt();
      break;
    case "smsAuthNo":
      //+ SMS 입력
      console.log("SMS 입력 :: ");
      readLine_1.setPrompt();
      break;
    case "simpleAuth":
      //+ PASS 인증 입력
      console.log("PASS 인증 입력 :: ");
      readLine_1.setPrompt();
      break;
    case "emailAuthNo":
      //+ PASS 인증 입력
      console.log("이메일 인증 입력 :: ");
      readLine_1.setPrompt();
      break;
    default:
      process.exit();
  }

  return new Promise((resolve) => {
    readLine_1.on("line", function (line) {
      switch (resObj.method) {
        case "secureNo":
          //+  보안문자 입력
          param.secureNo = line;
          param.secureNoRefresh = "0";
          break;
        case "smsAuthNo":
          //+ SMS 입력
          param.smsAuthNo = line;
          break;
        case "simpleAuth":
          //+ PASS 인증 입력
          param.simpleAuth = "1";
          break;
        case "emailAuthNo":
          //+ PASS 인증 입력
          param.emailAuthNo = line;
      }

      let twoWayInfo = {
        jobIndex: parseInt(resObj.jobIndex),
        threadIndex: parseInt(resObj.threadIndex),
        jti: resObj.jti,
        twoWayTimestamp: parseFloat(resObj.twoWayTimestamp),
      };

      param.twoWayInfo = twoWayInfo;
      param.is2Way = true;
      readLine_1.close();

      resolve(param);
    });
  });
}

run();
