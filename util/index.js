const CryptoJS = require("crypto-js");

const secretKey = "fhWy+?vi@VB$V9}";

exports.encryptIzi = (structure) => {
  const stringStructure = JSON.stringify(structure);

  const encryptedString = CryptoJS.AES.encrypt(
    stringStructure,
    secretKey
  ).toString();

  return encryptedString;
};

exports.decryptIzi = (encryptedStructure) => {
  const bytes = CryptoJS.AES.decrypt(encryptedStructure, secretKey);
  const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decryptedString);
};

module.exports = exports;
