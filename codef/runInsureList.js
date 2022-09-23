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

const productUrl = "v1/kr/insurance/0200/cont/find";

let param = {};

const serviceType = EasyCodefConstant.SERVICE_TYPE_DEMO;

let res = await codef.requestProduct(productUrl, serviceType, param);
console.log(res);
