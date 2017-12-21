'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _worker = require('./worker.js');

var _worker2 = _interopRequireDefault(_worker);

var _getProfile = require('./getProfile.js');

var _getProfile2 = _interopRequireDefault(_getProfile);

var _handleError = require('./handleError.js');

var _handleError2 = _interopRequireDefault(_handleError);

var _metamask = require('./metamask.js');

var _metamask2 = _interopRequireDefault(_metamask);

var _verifyAccount = require('./verifyAccount.js');

var _verifyAccount2 = _interopRequireDefault(_verifyAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenAccountActions = function () {
  function GitTokenAccountActions(_ref) {
    var profileApiUrl = _ref.profileApiUrl;
    (0, _classCallCheck3.default)(this, GitTokenAccountActions);

    this.profileApiUrl = profileApiUrl;
    this.worker = _worker2.default.bind(this);
    this.getProfile = _getProfile2.default.bind(this);
    this.handleError = _handleError2.default.bind(this);
    this.metamask = _metamask2.default.bind(this);
    this.verifyAccount = _verifyAccount2.default.bind(this);
  }

  (0, _createClass3.default)(GitTokenAccountActions, [{
    key: 'setup',
    value: function setup(_ref2) {
      var _ref2$steps = _ref2.steps,
          steps = _ref2$steps === undefined ? {} : _ref2$steps,
          _ref2$step = _ref2.step,
          step = _ref2$step === undefined ? '' : _ref2$step;

      return function (dispatch) {
        dispatch({
          type: 'SET_ACCOUNT_DETAILS',
          id: 'steps',
          value: (0, _extends4.default)({}, steps, (0, _defineProperty3.default)({}, step, (0, _extends4.default)({}, steps[step], { active: true })))
        });

        location.href = '/setup' + steps[step]['link'];
      };
    }
  }]);
  return GitTokenAccountActions;
}();

exports.default = GitTokenAccountActions;