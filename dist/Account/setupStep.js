'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupStep;
function setupStep(_ref) {
  var step = _ref.step;

  return function (dispatch) {
    dispatch({
      type: 'SET_ACCOUNT_SETUP_DETAILS',
      id: 'activeStep',
      value: step
    });

    location.href = '/setup/' + step;
  };
}