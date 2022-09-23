const { createCipheriv, createHmac } = require("crypto");
const makeMyDataHubAES = () => {
  // alog : AES_CBC_PKCS5PADDING/256
  // encKey : !w#wkW3AY5Tq#hGkh#UwAkq3TKk3s#36
  // EncIV : TIEY4xGsHK5YwTqs
  // plain : !Kwic123테스트
  // EncData : sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M=
};

console.log(makeMyDataHubAES("!Kwic123테스트"));
// return 'sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M='
