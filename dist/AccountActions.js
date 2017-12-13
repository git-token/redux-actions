'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _AccountWorker = require('gittoken-web-workers/dist/Account.worker.js');

var _AccountWorker2 = _interopRequireDefault(_AccountWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenAccountWorker = function () {
  function GitTokenAccountWorker(_ref) {
    var url = _ref.url;
    (0, _classCallCheck3.default)(this, GitTokenAccountWorker);


    this.profileApiUrl = url;

    this.worker = new _AccountWorker2.default();
    this.worker.onerror = this.handleError;
  }

  (0, _createClass3.default)(GitTokenAccountWorker, [{
    key: 'getProfile',
    value: function getProfile() {
      this.worker.postMessage({ type: 'GET_PROFILE', value: this.profileApiUrl });
    }
  }, {
    key: 'handleError',
    value: function handleError(error) {
      console.log('error', error);
    }
  }, {
    key: 'handleMessages',
    value: function handleMessages() {
      var _this = this;

      return function (dispatch) {
        _this.worker.addEventListener('message', function (msg) {
          dispatch(msg);
        });
      };
    }
  }]);
  return GitTokenAccountWorker;
}();

exports.default = GitTokenAccountWorker;