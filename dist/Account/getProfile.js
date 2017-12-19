'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProfile;
function getProfile(_ref) {
  var url = _ref.url;

  var value = url ? url : this.profileApiUrl;
  this.worker.postMessage({ type: 'GET_PROFILE', value: value });
  return null;
}