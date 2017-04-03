"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = required;
exports.isEmail = isEmail;
exports.isNumber = isNumber;
/**
 * @param value
 * @returns {boolean}
 */
function required(value) {
  return value.length === 0;
}

/**
 * @param value
 * @returns {boolean}
 */
function isEmail(value) {
  // eslint-disable-next-line no-useless-escape
  var Reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return !Reg.test(value);
}

/**
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
  var Reg = new RegExp(/^\d+$/);
  return !Reg.test(value);
}
//# sourceMappingURL=methods.js.map