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
    }, {
      type: 'bool',
      name: 'Agree to GitToken Terms Of Service',
      value: 'true'
    }];

    _this.web3.currentProvider.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }, function (error, sig) {
      if (error) {
        console.log(error);
      }

      console.log('sig', sig);
    });
  };
}