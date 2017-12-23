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
    var msgParams = [{
      type: 'address',
      name: 'Address',
      value: address
    }, {
      type: 'string',
      name: 'GitHub Username',
      value: username
    }];

    _this.web3.eth.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }).then(function (sig) {
      console.log('sig', sig);
    }).catch(function (error) {
      console.log('error', error);
    });
  };
}