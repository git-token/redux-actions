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
      _this.eth = (0, _bluebird.promisifyAll)(_this.web3.eth);
      _this.eth.getAccount().then(function (address) {
        alert('Found Address: ' + address);
      }).catch(function (error) {
        console.log('error', error);
        alert('MetaMask Account must be unlocked');
      });
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert');
    }
  };
}