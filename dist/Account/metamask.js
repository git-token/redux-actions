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
        if (!accounts.length) {
          alert('MetaMask Account must be unlocked');
        } else {
          alert('Found Address: ' + accounts[0]);
          return _this.web3.version.getNetworkAsync();
        }
      }).then(function (network) {
        console.log('network', network);
      }).catch(function (error) {
        console.log('error', error);
      });
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert');
    }
  };
}