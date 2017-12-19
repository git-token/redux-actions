'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = metamask;
function metamask() {
  var _this = this;

  return function (dispatch) {
    if (typeof window.web3 !== 'undefined') {
      _this.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert('Could not find MetaMask Plug-in, dispatch alert');
    }
  };
}