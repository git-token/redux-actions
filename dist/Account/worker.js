'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = worker;

var _AccountWorker = require('gittoken-web-workers/dist/Account/Account.worker.js');

var _AccountWorker2 = _interopRequireDefault(_AccountWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function worker() {
  var _this = this;

  return function (dispatch) {
    _this.worker = new _AccountWorker2.default({});
    _this.worker.onerror = _this.handleError;
    _this.worker.addEventListener('message', function (_ref) {
      var data = _ref.data;

      try {
        var _JSON$parse = JSON.parse(data),
            type = _JSON$parse.type,
            id = _JSON$parse.id,
            value = _JSON$parse.value;

        if (type) {
          dispatch({ type: type, id: id, value: value });
        }
      } catch (error) {
        console.log('error', error);
      }
    });
  };
}