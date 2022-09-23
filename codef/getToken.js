const { EasyCodef, EasyCodefConstant } = require("easycodef-node");

//코드에프 가입을 통해 발급 받은 클라이언트 정보 - 데모
const DEMO_CLIENT_ID = "0c40bb24-530e-4d03-a47d-e9619b4e59cf";
const DEMO_CLIENT_SECRET = "9471cd0e-4e3c-48f3-9cad-a1cb4096b55c";

// 코드에프 가입을 통해 발급 받은 클라이언트 정보- 정식
const CLIENT_ID = "";
const CLIENT_SECRET = "";

//	코드에프 가입을 통해 발급 받은 RSA 공개키 정보
const PUBLIC_KEY =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx5I0qXdY6TntcE3am2C1czumzRXbx5QlYT9b0Q5SGcqc9ErpVXRWnVUdVUiwHBcD2+aIhN00PYrSgwVSVAz5LrhxZxfiwe7Uj7C5j3Cn18Tk3thliHoB8iq2+04YE5NaQj/Tkz1ZVbuogo+8Pbkl/VjZY7L0W9wu57vDse2Xp2juT/WU5EjBtt6Szbpbs561ObsfpeUzHWC1WKzcuwRX0xt6bdgm5EsK/Prt4ZY/y+JFhCIxeoe8wN2iHYELp8SEUeTCbEwPXGQGkrihjg546bmZrdl9cu19R3+NaHNC/OPBvrrkB5HIEcjOqxOoMFMIyn6lz3bZMw7lUDu91q1UmwIDAQAB";

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

codef
  .requestToken(EasyCodefConstant.SERVICE_TYPE_DEMO)
  .then(function (response) {
    /*
     *  #6. 토큰 발급 결과
     */
    console.log(response);
  });

//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlX3R5cGUiOiIxIiwic2NvcGUiOlsicmVhZCJdLCJzZXJ2aWNlX25vIjoiMDAwMDAxNTczMDAyIiwiZXhwIjoxNjY0NTIxNzg4LCJhdXRob3JpdGllcyI6WyJJTlNVUkFOQ0UiLCJQVUJMSUMiLCJCQU5LIiwiRVRDIiwiU1RPQ0siLCJDQVJEIl0sImp0aSI6IjY0Y2VjZGRiLTVhZmQtNDBlMy04NTk4LTdhMTBiY2I0MmUyMCIsImNsaWVudF9pZCI6IjBjNDBiYjI0LTUzMGUtNGQwMy1hNDdkLWU5NjE5YjRlNTljZiJ9.hmfSnv4ZrV1W2igDI8iTRLLfxhRv9cpT7DmtzA-cGx-tIwaXpBRubnNEs6wkOQsX5V4GTOri-HzVlf91lMn4tyGNVpK5HVODsAgV61kF0pJglgPYGcPYQN_PfphtlcUZ8nx0bsFz0lcWZnnQvWVZ0A3JOfNwCiA4coI6E33Qsb_Ocb_VduE7kzyqQMzcgcViem4VRsujIA2V47t-_Zj_QK_V1iQoHMfD7DT2C6od4bu_Ftenrg0mlGiEroNTKCtPYufXo33RhNexoRvGuwgfUMR7dUnQoTjtUrIU6LBcTdI80D2Xve_teupV484TObLVSPr1G1IXaWyKZdsK75mUFg
