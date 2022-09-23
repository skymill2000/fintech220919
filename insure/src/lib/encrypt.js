const { createCipheriv, createHmac } = require("crypto");
export const makeMyDataHubAES = (plainText) => {
  // alog : AES_CBC_PKCS5PADDING/256
  let algorithm = "aes-256-cbc";
  // encKey : !w#wkW3AY5Tq#hGkh#UwAkq3TKk3s#36
  const key = "!w#wkW3AY5Tq#hGkh#UwAkq3TKk3s#36";
  // EncIV : TIEY4xGsHK5YwTqs
  const iv = "TIEY4xGsHK5YwTqs";
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainText, "utf-8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
  // plain : !Kwic123테스트
  // EncData : sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M=
};

console.log(makeMyDataHubAES("19890119"));

console.log(
  makeMyDataHubAES("!Kwic123테스트") ===
    "sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M="
    ? "일치합니다"
    : "불일치"
);

// return 'sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M='
//sd3TMem6Jv/Mn2LnvNbYDEuW7j0ESVy8Xde99V6ii5M=
