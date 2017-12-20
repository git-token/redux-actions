'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = metamask;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function metamask() {
  var _this = this;

  return function (dispatch) {
    if (typeof window.web3 !== 'undefined') {
      _this.web3 = new Web3(window.web3.currentProvider);
      _this.web3.eth = (0, _bluebird.promisifyAll)(_this.web3.eth);
      _this.web3.version = (0, _bluebird.promisifyAll)(_this.web3.version);
      _this.web3.eth.getAccountsAsync().then(function (accounts) {
        dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskInstalled', value: true });
        if (!accounts.length) {
          dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskLocked', value: true });
        } else {
          dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'address', value: accounts[0] });
          return _this.web3.version.getNetworkAsync();
        }
      }).then(function (network) {
        dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'network', value: network });
      }).catch(function (error) {
        console.log('error', error);
      });
    } else {
      console.log('Does this update automatically?');
      dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'setupStep', value: 'installMetamask' });
      dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskInstalled', value: false });
      dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskLocked', value: true });
    }
  };
}