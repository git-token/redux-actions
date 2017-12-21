"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyAccount;
function verifyAccount(_ref) {
  var address = _ref.address,
      username = _ref.username;

  console.log("address", address);
  console.log("username", username);
  alert('dispatch worker process to verify account');
}