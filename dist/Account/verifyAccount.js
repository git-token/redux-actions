'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyAccount;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyAccount(_ref) {
  var _this = this;

  var address = _ref.address,
      username = _ref.username,
      termsOfService = _ref.termsOfService;

  return function (dispatch) {
    var msgParams = [{
      type: 'address',
      name: 'Ethereum Address',
      value: address
    }, {
      type: 'string',
      name: 'GitHub Username',
      value: username
    }, {
      type: 'string',
      name: 'GitToken Terms of Service',
      value: termsOfService
    }, {
      type: 'bool',
      name: 'Agree to GitToken Terms of Service',
      value: 'true'
    }];

    dispatch({
      type: 'SET_ACCOUNT_SETUP_DETAILS',
      id: 'verificationStatus',
      value: 'verifying'
    });

    _this.web3.currentProvider.sendAsync({
      method: 'eth_signTypedData',
      params: [msgParams, address],
      from: address
    }, function (error, sig) {
      if (error) {
        console.log(error);
      }
      console.log('sig', sig);
      (0, _axios2.default)({
        url: _this.accountApiUrl + '/verify',
        method: 'POST',
        data: {
          msgParams: msgParams,
          sig: sig.result
        },
        json: true
      }).then(function (verified) {
        console.log('verified', verified);

        dispatch({
          type: 'SET_ACCOUNT_SETUP_DETAILS',
          id: 'verificationStatus',
          value: 'verified'
        });
      }).catch(function (error) {
        console.log('error', error);
      });
    });
  };
}