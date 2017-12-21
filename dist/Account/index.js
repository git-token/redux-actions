'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _worker = require('./worker');

var _worker2 = _interopRequireDefault(_worker);

var _getProfile = require('./getProfile');

var _getProfile2 = _interopRequireDefault(_getProfile);

var _handleError = require('./handleError');

var _handleError2 = _interopRequireDefault(_handleError);

var _metamask = require('./metamask');

var _metamask2 = _interopRequireDefault(_metamask);

var _verifyAccount = require('./verifyAccount');

var _verifyAccount2 = _interopRequireDefault(_verifyAccount);

var _setupStep = require('./setupStep');

var _setupStep2 = _interopRequireDefault(_setupStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenAccountActions = function GitTokenAccountActions(_ref) {
  var profileApiUrl = _ref.profileApiUrl;
  (0, _classCallCheck3.default)(this, GitTokenAccountActions);

  this.profileApiUrl = profileApiUrl;
  this.worker = _worker2.default.bind(this);
  this.getProfile = _getProfile2.default.bind(this);
  this.handleError = _handleError2.default.bind(this);
  this.metamask = _metamask2.default.bind(this);
  this.verifyAccount = _verifyAccount2.default.bind(this);
  this.setupStep = _setupStep2.default.bind(this);
};

exports.default = GitTokenAccountActions;