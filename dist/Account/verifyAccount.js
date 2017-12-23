'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyAccount;
function verifyAccount(_ref) {
  var _this = this;

  var address = _ref.address,
      username = _ref.username;

  return function (dispatch) {
    var msg = '0x' + _this.web3.sha3(username + '@' + address);

    _this.web3.eth.signAsync(address, msg).then(function (sig) {
      console.log('sig', sig);
    }).catch(function (error) {
      console.log('error', error);
    });
  };
}