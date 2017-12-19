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

var _worker = require('./worker.js');

var _worker2 = _interopRequireDefault(_worker);

var _getProfile = require('./getProfile.js');

var _getProfile2 = _interopRequireDefault(_getProfile);

var _handleError = require('./handleError.js');

var _handleError2 = _interopRequireDefault(_handleError);

var _metamask = require('./metamask.js');

var _metamask2 = _interopRequireDefault(_metamask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenAccountActions = function GitTokenAccountActions(_ref) {
  var url = _ref.url;
  (0, _classCallCheck3.default)(this, GitTokenAccountActions);

  this.profileApiUrl = url;
  this.worker = _worker2.default.bind(this);
  this.getProfile = _getProfile2.default.bind(this);
  this.handleError = _handleError2.default.bind(this);
  this.metamask = _metamask2.default.bind(this);
};

exports.default = GitTokenAccountActions;